import { Request, Response } from "express";
import AuthRepository from "../repository/auth_repository";
import UserRepository from "../repository/user_repository";

import * as yup from "yup";

class AuthController {
  authRepository: AuthRepository = new AuthRepository();
  userRepository: UserRepository = new UserRepository();

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  public async cadastrar(req: Request, res: Response) {
    const schema = yup.object({
      nome: yup.string().required(),
      email: yup.string().email().required(),
      senha: yup.string().required().min(6),
    });

    try {
      const { nome, email, senha } = await schema.validate(req.body);

      const emailExiste = await this.userRepository.procurarEmail(email);

      if (emailExiste) {
        res
          .status(400)
          .json({ sucess: false, message: "Email já Cadastrado." });
      }

      await this.authRepository.cadastrar(nome, email, senha);

      res
        .status(201)
        .json({ sucess: true, message: "Usuario cadastrado com sucesso." });
    } catch (error) {
      res.status(400).json({ sucess: false, message: error });
    }
  }

  public async logar(req: Request, res: Response) {}
  public async verificar(req: Request, res: Response) {}
}

export default AuthController;
