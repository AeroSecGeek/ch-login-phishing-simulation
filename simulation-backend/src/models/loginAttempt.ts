import { Schema, model } from "mongoose";

const loginAttemptSchema = new Schema({
  email: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const LoginAttempt = model("LoginAttempt", loginAttemptSchema);

export default LoginAttempt;
