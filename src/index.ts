import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: "Hello World!" });
});

app.listen(port, () => {
  console.log("App start on port " + port);
});
