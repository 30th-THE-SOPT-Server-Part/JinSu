import { BadRequestError, Get, HttpCode, JsonController, QueryParam, Req, Res } from "routing-controllers";
import { Request, Response } from "express";
import { UserService } from "../service/UserService";
import { Service } from "typedi";
import HttpState from "../util/HttpState";

@JsonController()
@Service()
export class UserController {

    constructor(
        private userService: UserService
    ) {
    }

    @Get("/user")
    @HttpCode(HttpState.OK)
    async getUserUseQuery(
        @QueryParam("name") name: String,
        @Req() request: Request,
        @Res() response: Response
    ) {
        try {
            return await this.userService.getUser(name);
        } catch (error) {
            console.log(error?.message);
            throw new BadRequestError(`${name} 을 찾을 수 없음.`)
        }
    }

}
