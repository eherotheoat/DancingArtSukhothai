import { AxiosError } from "axios";
import IRejectValue from "../store/iRejectValue";

const CODE_DEFAULT_ERROR = "99999";

export const axiosCatch = (error: AxiosError): IRejectValue => {
  if (error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
      setTimeout(() => {
      }, 4000);
    }

    if (typeof error.response.data == "string") {
      return {
        data: null,
        status: {
          code: CODE_DEFAULT_ERROR,
          message: error.message,
          description: error.response.data,
        },
      };
    } else if (typeof error.response.data == "object") {
      return error.response.data as IRejectValue;
    } else {
      return {
        data: null,
        status: {
          code: CODE_DEFAULT_ERROR,
          message: error.message + " " + error.code,
          description: "",
        },
      };
    }
  } else {
    return {
      data: null,
      status: {
        code: CODE_DEFAULT_ERROR,
        message: error.message + " " + error.code,
        description: "",
      },
    };
  }
};
