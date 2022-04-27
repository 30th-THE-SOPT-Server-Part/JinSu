import { Get, JsonController, Req, Res } from "routing-controllers";
import { Request, Response }             from "express";
import Blog                              from "../model/blog/Blog";
import BlogService                       from "../service/blog/BlogService";
import HttpState                         from "../util/HttpState";
import { Service }                       from "typedi";

@JsonController()
@Service()
export class BlogController {
    constructor(
        private readonly blogService: BlogService
    ) {
    }

    @Get("/blog")
    async getBlog(
        @Req() request: Request,
        @Res() response: Response
    ) {
        const blog: Blog = await this.blogService.getBlog();
        throw new Error("asdf")
        return response.status(HttpState.OK).send(blog);
    }
}
