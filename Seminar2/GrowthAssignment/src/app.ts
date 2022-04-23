import 'reflect-metadata';
import { Application } from "./application";

const application = new Application();
const port = 3020;

application.createExpressServer(port);