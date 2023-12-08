"use server";

import { ChallengeType } from "../interface/challenge";
import Challenge from "../models/challenge.model";
import connectDB from "../mongodb";

export async function fetchChallenges() {
  try {
    connectDB();

    const query = Challenge.find({})
      .sort({ createdAt: "desc" })
      .lean()
      .select("_id answer question")
      .exec();

    const totalCount = await Challenge.countDocuments({});
    const data = await query;

    const plainData: ChallengeType[] = data.map((d: any) => {
      return {
        ...d,
        _id: d._id?.toString(),
      };
    });

    return { challenges: plainData, totalCount };
  } catch (error: any) {
    throw new Error("Error in fetching users", error.message);
  }
}

export async function createNewChallenge({
  answer,
  question,
}: {
  answer: string;
  question: string;
}) {
  try {
    connectDB();

    console.log({ answer, question });
    const created = await Challenge.create({
      answer,
      question,
    });

    console.log(created);

    return {
      message: "Successfully Created New Answer",
      success: true,
    };
  } catch (error: any) {
    throw new Error(`Error creating new answer: ${error.message}`);
  }
}

// export async function deleteQuestion({ _id }: { _id: string }) {
//   try {
//     connectDB();

//     console.log(_id);
//     const created = await Question.findByIdAndDelete(_id);

//     console.log(created);

//     return {
//       message: "Successfully deleted Question",
//       success: true,
//     };
//   } catch (error: any) {
//     throw new Error(`Error deleting question: ${error.message}`);
//   }
// }
