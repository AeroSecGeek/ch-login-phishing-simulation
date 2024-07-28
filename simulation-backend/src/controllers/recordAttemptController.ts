import { Request, Response } from "express";
import ChLoginAttempt from "../models/chLoginAttempt";
import OtherLoginAttempt from "../models/otherLoginAttempt";
import NumberOfVisits from "../models/NumberOfVisits";

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

export const logVisit = async (req: Request, res: Response) => {
  const numberOfVisits = await NumberOfVisits.findOne();
  if (!numberOfVisits) {
    const newNumberOfVisits = new NumberOfVisits({ counter: 1 });
    await newNumberOfVisits.save();
  } else {
    numberOfVisits.counter++;
    await numberOfVisits.save();
  }
  console.log("Visit recorded");
  res.json({ success: true });
};
