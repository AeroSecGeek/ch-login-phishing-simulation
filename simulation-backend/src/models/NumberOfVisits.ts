import { model, Schema } from "mongoose";

const numberOfVisitsSchema = new Schema({
  counter: { type: Number, required: true },
});

const NumberOfVisits = model("NumberOfVisits", numberOfVisitsSchema);

export default NumberOfVisits;
