import express, { Express, NextFunction, Request, Response } from "express";
import { catalogRoute } from "./api/catalog.route";

const app: Express = express();

app.use(express.json());

app.use("/", catalogRoute);

export default app;
