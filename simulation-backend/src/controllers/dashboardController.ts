import { Request, Response } from "express";
import ChLoginAttempt from "../models/chLoginAttempt";
import OtherLoginAttempt from "../models/otherLoginAttempt";
import NumberOfVisits from "../models/NumberOfVisits";

export const getDashboard = async (req: Request, res: Response) => {
  console.log("getDashboard");
  try {
    const chAttempts = await ChLoginAttempt.find();
    const otherAttempts = await OtherLoginAttempt.find();
    const numberOfVisits = await NumberOfVisits.findOne();
    res.json({
      chLogin: chAttempts,
      otherAttempts: otherAttempts.length,
      numberOfVisits: numberOfVisits?.counter,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
