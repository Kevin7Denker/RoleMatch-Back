import user from "../models/user";

class UserRepository {
  public async procurarEmail(email: string) {
    try {
      const response = await user.findOne({ "profile.email": email });

      if (response != null) {
        return true;
      }

      return false;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return error;
      }
    }
  }
}

export default UserRepository;
