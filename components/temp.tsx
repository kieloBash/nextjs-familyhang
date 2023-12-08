"use client";
import useFetchQuestions from "@/hooks/getQuestions";
import { Loader2 } from "lucide-react";
import React from "react";

const Temp = () => {
  const asd = useFetchQuestions();
  if (asd.isLoading) return <Loader2 className="w-5 h-5 animate-spin" />;
  return (
    <ul>
      {asd.data?.map((s) => {
        return (
          <li className="" key={s._id}>
            {s.question}
          </li>
        );
      })}
    </ul>
  );
};

export default Temp;
