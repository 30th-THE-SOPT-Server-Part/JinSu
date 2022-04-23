import 'reflect-metadata';
import express from "express";
import { useContainer, useExpressServer } from "routing-controllers";
import { Container } from "typedi";
import { routingConfig } from "./config/routingConfig";
import { INJECT_IDENTIFIER } from "./config/GrowthAssignmentContainer";

export class Application {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.setMiddlewares();
    }

    private setMiddlewares(): void {
        this.app.use(express.json());
    }

    public createExpressServer(port: number) {
        useContainer(Container);
        useExpressServer(this.app, routingConfig);
        this.app.listen(port, ()=>{
            console.log(`server port is ${port}`);
        })
    }
}