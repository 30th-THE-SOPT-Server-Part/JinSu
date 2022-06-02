import { plainToInstance }                 from "class-transformer";
import { validateOrReject }                from "class-validator";
import { NextFunction, Request, Response } from "express";
import message                             from "../modules/responseMessage";
import statusCode                          from "../modules/statusCode";
import ResponseWrapper                     from "../utils/ResponseWrapper";

export function validateBody(classStruct: { new(...args: any[]): any }) {
    return async function (req: Request, res: Response, next: NextFunction) {
        const target = plainToInstance(classStruct, req.body);
        try {
            await validateOrReject(target, {whitelist: true});
            next();
        } catch (error) {
            const valiateFailResponse = ResponseWrapper.failureOf(statusCode.BAD_REQUEST, message.BAD_REQUEST)
            return res.status(statusCode.BAD_REQUEST)
                .send(valiateFailResponse)
        }
    };
}