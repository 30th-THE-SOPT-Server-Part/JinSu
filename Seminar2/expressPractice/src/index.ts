import express, {Request, Response, NextFunction} from "express";

const app = express();

app.get(`/`, (req: Request, res: Response, next: NextFunction) => {
    res.send(`Hi! run server`);
});

app.listen(`8000`, () => {
    console.log("server port is 8000");
});