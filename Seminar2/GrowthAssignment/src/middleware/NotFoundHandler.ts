import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import HttpState                                  from "../util/HttpState";
import { Service }                                from "typedi";

@Middleware({type: "after"})
@Service()
export default class NotFoundHandler implements ExpressMiddlewareInterface {
    use(request: any, response: any, next: (err?: any) => any): any {
        response.status(HttpState.NOT_FOUND)
            .send({message: "not found"});
    }
};