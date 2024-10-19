import mongoose from "mongoose";

export const AuthSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilepic: { type: String, required: true },
  },
  { timestamps: true }
);

export const AuthModel =
  mongoose.models.Auth || mongoose.model("Auth", AuthSchema);
