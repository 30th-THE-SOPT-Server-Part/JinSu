import { Response }             from "express";
import { Controller, Get, Res } from "routing-controllers";
import { Service }              from "typedi";
import HttpState                from "../util/HttpState";

@Controller()
@Service()
export default class LikeController {
    @Get("/like")
    getLike(@Res() response: Response) {
        return response.status(HttpState.OK)
            .send({
                count: 20
            })
    }
};