import { Request, Response } from "express";
import LoginAttempt from "../models/loginAttempt";

export const getDashboard = async (req: Request, res: Response) => {
  console.log("getDashboard");
  try {
    const attempts = await LoginAttempt.find();
    res.json(attempts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
