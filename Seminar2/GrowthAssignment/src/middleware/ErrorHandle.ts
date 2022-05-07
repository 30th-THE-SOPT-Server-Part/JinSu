import { ExpressErrorMiddlewareInterface, Middleware } from "routing-controllers";
import HttpState                                       from "../util/HttpState";
import { Service }                                     from "typedi";

@Middleware({type: "after"})
@Service()
export default class ErrorHandle implements ExpressErrorMiddlewareInterface {
    error(error: any, request: any, response: any, next: (err?: any) => any): void {
        response.status(HttpState.INTERNAL_SERVER_ERROR)
            .send({message: "internal_server_error"})
        next()
    }
};