import { Request, Response } from "express";

export const getDashboard = async (req: Request, res: Response) => {
  console.log("getDashboard");
  res.send("Dasboard");
};
