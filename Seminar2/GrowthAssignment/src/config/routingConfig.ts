import path from "path";

export const routingConfig = {
    routePrefix: "/api",
    controllers:[path.join(`${__dirname}/../controller/*{.ts,.js}`)]
}