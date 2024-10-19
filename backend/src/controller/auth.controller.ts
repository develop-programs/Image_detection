import { AuthModel } from "../database/models/auth.model.js";
import { Request, Response } from "express";

export async function registerUser(req: Request, res: Response) {
  const { name, email, password, profilepic } = req.body;
  try {
    const searchUser = await AuthModel.find({ email: email });
    if (searchUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await AuthModel.create();
    res.status(201).json({ user });
  } catch (err) {}
}
