import { RootState } from ".";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axiosCatch } from "../utils/axiosCatch";
import { RequestLogin, ResponseLogin } from "../models/login";
import IRejectValue from "./iRejectValue";
import LoginService from "../service/LoginService";

type InitialState = {
  loading: boolean;
  userDetail: {
    userName: string,
    userExpire: string | null,
    userToken: string
  } | null;
  rememberMe: boolean;
  statusLogin: string;
  messageShow: string;
  error: IRejectValue | null;
};

// Start state
const initialState: InitialState = {
  loading: false,
  rememberMe: localStorage.getItem('rememberMe') ? localStorage.getItem('rememberMe') == 'true' ? true : false : false,
  userDetail: null,
  statusLogin: "00",
  error: null,
  messageShow: ""
};

export const login = createAsyncThunk<
  // Return data
  ResponseLogin,
  // First argument to the payload creator
  RequestLogin,
  // Types for ThunkAPI
  {
    rejectValue: IRejectValue;
  }
>("Login", async (payload, { rejectWithValue }) => {
  try {
    const response = await LoginService.login(payload);
    return response;
  } catch (err: any) {
    return rejectWithValue(axiosCatch(err));
  }
});

// Start reducer
const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    setRememberMe(state: InitialState, action: PayloadAction<boolean>) {
      state.rememberMe = action.payload
    }
  },
  extraReducers: (builder) => {
    // --- start fetch PrepareMarerial ---
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.messageShow = "กำลังโหลด..."
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<ResponseLogin>) => {
        state.loading = false;
        if (action.payload.data.statusLogin.statusCode == "01") {
          if (action.payload.data.userDetail) {
            localStorage.setItem('memberId', action.payload.data.userDetail.memberId);
            localStorage.setItem('userExpire', action.payload.data.userDetail.userExpire);
            localStorage.setItem('token', action.payload.token);
            state.userDetail = {
              userName: action.payload.data.userDetail.userName,
              userExpire: action.payload.data.userDetail.userExpire,
              userToken: action.payload.token
            }
          } else {
            state.userDetail = null
          }
        }
        state.messageShow = action.payload.data.statusLogin.description
        state.statusLogin = action.payload.data.statusLogin.statusCode;
      }
    );
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.messageShow = action.payload.status.message
        state.error = {
          status: {
            code: action.payload.status.code,
            message: action.payload.status.message,
            description: action.payload.status.description
          },
          data: null
        };
      } else {
        state.messageShow = "ระบบเกิดข้อผิดพลาด กรุณาลองใหม่"
      }
    });
    // --- End fetch PrepareMarerial ---
  },
});
// End reducer

// Start action
export const {
  setRememberMe
} = loginSlice.actions;
// End action

export const loginSelector = (state: RootState) => state.login;

export default loginSlice;
