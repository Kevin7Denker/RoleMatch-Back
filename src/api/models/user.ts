import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserProfile = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  imagem: { type: String, default: "indefinida", required: true },
});

const UserConfig = new Schema({
  tema: { type: String, default: "white", required: true },
});

const UserFriends = new Schema({
  amigos: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: {},
    required: true,
  },
});

const User = new Schema({
  profile: { type: UserProfile, default: {} },
  config: { type: UserConfig, default: {} },
  friends: { type: UserFriends, default: {} },
});

export default mongoose.model("User", User);
