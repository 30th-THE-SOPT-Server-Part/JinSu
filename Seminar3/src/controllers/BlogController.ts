import { NextFunction, Request, Response } from "express";
import { BlogCreateDTO }                   from "../interfaces/blog/BlogCreateDTO";
import { blogResponseMessage }             from "../modules/responseMessage";
import statusCode                          from "../modules/statusCode";
import StatusCode                          from "../modules/statusCode";
import BlogService                         from "../services/BlogService";
import ResponseWrapper                     from "../utils/ResponseWrapper";

export default class BlogController {
    constructor(private blogService: BlogService) {
    }

    /**
     *  @route POST /blog
     *  @desc post blog contents
     *  @access Public
     */
    async createBlog(request: Request, response: Response, next: NextFunction) {
        const blogCreateDTO: BlogCreateDTO = request.body;
        try {
            const blog = await this.blogService.createBlog(blogCreateDTO);
            if (!blog) {
                const failureResponse = ResponseWrapper.failureOf(StatusCode.NOT_FOUND, blogResponseMessage.NOT_FOUND_USER)
                return response.status(StatusCode.NOT_FOUND)
                    .send(failureResponse)
            }
            const successResponse = ResponseWrapper.successOf(statusCode.CREATED, blogResponseMessage.CREATE_BLOG_SUCCESS, blog);
            response.status(statusCode.CREATED)
                .send(successResponse)
        } catch (error) {
            next(error)
        }
    }

    /**
     *  @route GET /blog/:blogId
     *  @desc get find blog by id
     *  @access Public
     */
    async getBlogByOne(request: Request, response: Response, next: NextFunction) {

    }
};