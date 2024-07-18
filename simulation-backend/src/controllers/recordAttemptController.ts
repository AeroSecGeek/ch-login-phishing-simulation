import { Request, Response } from "express";
import LoginAttempt from "../models/loginAttempt";

export const logAttempt = async (req: Request, res: Response) => {
  const { email } = req.body;
  const loginAttempt = new LoginAttempt({ email });
  await loginAttempt.save();
  console.log("Attempt recorded");
  res.json({ success: true });
};
