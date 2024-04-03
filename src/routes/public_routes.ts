import express, { Request, Response } from "express";

const route = express.Router();

route.get("/", (req: Request, res: Response) => {
  res.status(200).json("Bem Vindo ao RoleMatch Api");
});

export default route;
