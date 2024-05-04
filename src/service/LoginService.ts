import dayjs from "dayjs";
import { AxiosResponse } from "axios";
import axios from "../lib/axios";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { RequestLogin, ResponseLogin } from "../models/login";

dayjs.extend(utc);
dayjs.extend(timezone);

const LoginService = {

    async login(req: RequestLogin): Promise<ResponseLogin> {

        const Response: AxiosResponse<
        ResponseLogin, any> = await axios({
            method: "POST",
            url: "/api/login",
            data: {
                member_id : req.member_id,
                password: req.password,
                language: req.language,
                ip: req.ip
            },
          });
    
        return Response.data
      },

};

export default LoginService;
