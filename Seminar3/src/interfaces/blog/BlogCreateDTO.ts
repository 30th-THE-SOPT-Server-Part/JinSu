import { IsMongoId, IsString } from "class-validator";
import mongoose                from "mongoose";
import { UserInfo }            from "../user/UserInfo";
import { Blog }                from "./Blog";

export class BlogCreateDTO {
    @IsMongoId()
    userId: mongoose.Types.ObjectId;
    @IsString()
    title: string;
    @IsString()
    contents: string;


    constructor(userId: mongoose.Types.ObjectId, title: string, contents: string) {
        this.userId = userId;
        this.title = title;
        this.contents = contents;
    }
}