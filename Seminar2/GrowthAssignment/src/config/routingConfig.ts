import path from "path";

export const routingConfig = {
    routePrefix: "/api",
    defaultErrorHandler: false,
    middlewares: [path.join(`${__dirname}/../middleware/*{.ts,.js}`)],
    controllers: [path.join(`${__dirname}/../controller/*{.ts,.js}`)]
}