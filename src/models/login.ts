import { Status } from "./status";

export interface RequestLogin {
    member_id: string;
    password: string;
    language: string;
    ip: string;
}

export interface ResponseLogin {
    status: Status;
    data: {
        statusLogin: StatusLogin;
        userDetail: UserDetail | null;
    }
    token: string;
}

export interface StatusLogin {
    statusCode: string;
    statusMessage: string;
    description: string;
}

export interface UserDetail {
    alertLang: string;
    defaultClassYear: string;
    langStudent: string;
    lastChangPswd: string;
    lastLogingDate: string;
    memberId: string;
    menuList: MenuList[];
    userExpire: string;
    nextChangPswd: string;
    recvRunnoType: string;
    schoolName: string;
    trnsAmountWithdraw: string;
    userName: string;
    exp: string;
}

export interface MenuList {
    systemName: string,
    app: AppList[]
}

export interface AppList {
    appPath: string;
    appName: string;
}