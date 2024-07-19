import { Schema, model } from "mongoose";

const otherAttemptSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
});

const OtherLoginAttempt = model("OtherAttempt", otherAttemptSchema);

export default OtherLoginAttempt;
