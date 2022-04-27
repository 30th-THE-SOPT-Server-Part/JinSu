import { Controller, Get, QueryParam, Req, Res } from "routing-controllers";
import { Request, Response } from "express";
import { UserService } from "../../service/UserService";
import { Service } from "typedi";
import HttpState from "../../util/HttpState";
import { User } from "../../model/user/User";
import { UserNameNotFoundError } from "../../domain/UserNameNotFoundError";

@Controller()
@Service()
export class UserController {

    constructor(
        private userService: UserService
    ) {
    }

    @Get("/user")
    async getUserUseQuery(
        @QueryParam("name") name: String,
        @Req() request: Request,
        @Res() response: Response
    ) {
        try {
            const user: User = await this.userService.getUser(name);
            return response.status(HttpState.OK).send(user);
        } catch (error: UserNameNotFoundError) {
            return response.status(HttpState.BAD_REQUEST).send({message: error.message});
        }
    }

}
