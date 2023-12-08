import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Challenge =
  mongoose.models.challenge || mongoose.model("challenge", challengeSchema);
export default Challenge;
