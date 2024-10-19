import express, { Request, Response } from "express";

const MainRoute = express.Router();

MainRoute.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default MainRoute;
