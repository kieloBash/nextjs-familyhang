import React from "react";

// DB
import connectDB from "@/lib/mongodb";
import Challenge from "@/lib/models/challenge.model";
import { ChallengeType } from "@/lib/interface/challenge";
import Display from "@/components/display";

async function fetchSingleChallenge(_id: string) {
  try {
    connectDB();

    console.log(_id);

    const created: any = await Challenge.findById(_id)
      .lean()
      .select("_id answer question")
      .exec();

    if (!created)
      return {
        message: "Errer fetching Question",
        success: false,
      };

    return {
      message: "Successfully fetch Question",
      success: true,
      data: { ...created, _id: created._id.toString() } as ChallengeType,
    };
  } catch (error: any) {
    throw new Error(`Error fetch question: ${error.message}`);
  }
}

const ChallengePage = async ({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { challengeId } = params;

  const single = await fetchSingleChallenge(challengeId as string);

  if (!single.success) return null;

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl mb-4 font-medium">
        {single.data?.question}
      </h1>
      <Display />
    </main>
  );
};

export default ChallengePage;
