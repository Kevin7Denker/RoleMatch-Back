import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserProfile = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    imagem: { type: String, default: "indefinida", required: true },
  },
  { _id: false }
);

const UserConfig = new Schema(
  {
    tema: { type: String, default: "white", required: true },
  },
  { _id: false }
);

const User = new Schema({
  profile: { type: UserProfile, default: {} },
  config: { type: UserConfig, default: {} },
});

export default mongoose.model("User", User);
