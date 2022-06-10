import "reflect-metadata"
import { Container }  from "typedi";
import winston        from "winston";
import Logger         from "./logger";
import LoggerInstance from "./logger";

const dependencyInjector = (models: { name: string; instance: any }[]) => {
    try {
        /*models.forEach(model => {
            Container.set()
            Logger.info(`${model.name} is set : ${model.instance}`)
        })*/

        Container.set<winston.Logger>('Logger', Logger);
    } catch (error) {
        LoggerInstance.error('Error on Dependency Inject %o', error)
        throw error;
    }
}

export default dependencyInjector