import mongoose from "mongoose";

const { Schema } = mongoose;

const CalculatorData = new Schema({
  operation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  resultString: {
    type: String,
    required: true,
  },
});

var result = mongoose.model("data", CalculatorData);

export default result;
