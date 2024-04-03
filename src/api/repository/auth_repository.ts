import bcrypt from "bcrypt";
import User from "../models/user";
import TokenService from "../services/token_service";
import { AnyObject } from "yup";

class AuthRepository {
  tokenService: TokenService = new TokenService();

  public async cadastrar(nome: string, email: string, senha: string) {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(senha, salt);

    try {
      const user = new User({
        profile: {
          nome: nome,
          email: email,
          senha: hash,
        },
      });

      user.save();

      const token = this.tokenService.gerarToken(user._id.toString());

      const data: AnyObject = { ...user.toObject() };

      if (data.profile.senha) {
        delete data.profile.senha;
      }

      return data;
    } catch (error) {
      return error;
    }
  }

  public async logar(email: string, senha: string) {}

  public async verificar(token: string) {}
}

export default AuthRepository;
