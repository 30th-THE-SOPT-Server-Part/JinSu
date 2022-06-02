import { UserInfo } from "../user/UserInfo";

export interface Blog {
    title: string;
    contents: string;
    user: UserInfo;
}