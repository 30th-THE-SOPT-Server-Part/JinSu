import express        from "express";
import "reflect-metadata";
import { Container }  from "typedi";
import config         from "./config";
import startLoaders   from "./loaders";
import Logger         from "./loaders/logger";

require('dotenv').config();
const serverStartMessage = `
    ################################################
     🛡️ Server listening on port ${config.port} 🛡️
    ################################################
  `

async function startServer() {
    const app = express();
    await startLoaders(app);
    app.listen(config.port, () => {
        Logger.info(serverStartMessage);
    }).on("error", (err) => {
        Logger.error(err)
        process.exit(1);
    });
}

Container.set("Logger", 10);
startServer().then(r => {
    Logger.info(`starting Server`)
})
