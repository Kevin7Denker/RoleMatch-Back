import express, { Request, Response } from "express";
import AuthController from "../api/controllers/auth_controller";
import AuthRepository from "../api/repository/auth_repository";

const route = express.Router();

const authRepository: AuthRepository = new AuthRepository();
const authController: AuthController = new AuthController(authRepository);

route.get("/cadastro", (req: Request, res: Response) =>
  authController.cadastrar(req, res)
);

route.get("/login", (req: Request, res: Response) =>
  authController.logar(req, res)
);

route.get("/verificar", (req: Request, res: Response) =>
  authController.verificar(req, res)
);

export default route;
