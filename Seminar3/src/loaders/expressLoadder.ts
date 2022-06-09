import express, { NextFunction, Request, Response } from "express";
import config                                       from "../config";
import { message }                                  from "../modules/responseMessage";
import statusCode                                   from "../modules/statusCode";
import routes                                       from "../routes";
import ResponseWrapper                              from "../utils/ResponseWrapper";
import logger                                       from "./logger";

require('dotenv').config();
const morgan = require('morgan');
const morganFormat = process.env.NODE_ENV === "production" ? 'combined' : 'dev';

interface ErrorType {
    message: string;
    status: number;
}

export default (app: express.Application) => {
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(morgan(morganFormat, {
        "stream": logger.stream({
            write: (message: string) => {
                logger.info(message)
            }
        })
    }));

    app.use(config.apipath, routes);
    app.use((req: Request, res: Response, next: NextFunction) => {
        const error: ErrorType = {
            message: message.BAD_REQUEST,
            status: 404
        }
        next(error);
    });
    app.use(function (err: ErrorType, req: Request, res: Response, next: NextFunction) {

        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "production" ? err : {};

        // render the error page
        res.status(err.status || statusCode.INTERNAL_SERVER_ERROR)
            .send(ResponseWrapper.failureOf(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR))
    });
}