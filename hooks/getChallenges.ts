"use client";

import { fetchChallenges } from "@/lib/actions/challenge.action";
import { ChallengeType } from "@/lib/interface/challenge";
import { useQuery } from "@tanstack/react-query";

const useFetchChallenges = () => {
  const { data, isLoading } = useQuery({
    queryKey: [`challenges`],
    queryFn: async () => {
      const { challenges } = await fetchChallenges();
      return challenges;
    },
  });
  const challenges = data as ChallengeType[];
  return { data: challenges, isLoading };
};

export default useFetchChallenges;
