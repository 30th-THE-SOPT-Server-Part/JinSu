import { IsMongoId, IsString } from "class-validator";
import mongoose                from "mongoose";
import { UserInfo }            from "../user/UserInfo";
import { Blog }                from "./Blog";

export class BlogCreateDTO {
    @IsString()
    userId: string;
    @IsString()
    title: string;
    @IsString()
    contents: string;


    constructor(userId: string, title: string, contents: string) {
        this.userId = userId;
        this.title = title;
        this.contents = contents;
    }
}