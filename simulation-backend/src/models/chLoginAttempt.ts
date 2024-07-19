import { Schema, model } from "mongoose";

const chLoginAttemptSchema = new Schema({
  email: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const ChLoginAttempt = model("ChLoginAttempt", chLoginAttemptSchema);

export default ChLoginAttempt;
