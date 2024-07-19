import { Request, Response } from "express";
import ChLoginAttempt from "../models/chLoginAttempt";
import OtherLoginAttempt from "../models/otherLoginAttempt";

export const logChAttempt = async (req: Request, res: Response) => {
  const { email } = req.body;
  const loginAttempt = new ChLoginAttempt({ email });
  await loginAttempt.save();
  console.log("CH-Attempt recorded");
  res.json({ success: true });
};

export const logOtherAttempt = async (req: Request, res: Response) => {
  const loginAttempt = new OtherLoginAttempt();
  await loginAttempt.save();
  console.log("Other Attempt recorded");
  res.json({ success: true });
};
