import jwt from "jsonwebtoken";
import { env } from "../../config/config";

class TokenService {
  public async gerarToken(userId: string) {
    const secret = env.SECRET;

    if (secret != null) {
      const token = jwt.sign({ id: userId }, secret, { expiresIn: "10m" });

      return token;
    }
  }
}

export default TokenService;
