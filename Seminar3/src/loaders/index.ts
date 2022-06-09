import express            from "express";
import models             from "../models/inext";
import connectDB          from "./db";
import dependencyInjector from "./dependencyInjector";
import expressLoadder     from "./expressLoadder";

const startLoaders = async (expressApp: express.Application) => {
    dependencyInjector(models)
    await connectDB();
    expressLoadder(expressApp)
}

export default startLoaders