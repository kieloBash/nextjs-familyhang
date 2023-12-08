"use client";
import { useSidebar } from "@/contexts/SidebarProvider";
import React from "react";

const Display = ({ answer }: { answer: string }) => {
  const splitted = answer.toLocaleUpperCase().split(" ");
  const { guessed } = useSidebar();

  return (
    <section className="flex flex-wrap gap-1 w-full max-w-[60rem] justify-center items-center">
      {splitted.map((word, i) => {
        const wordArr = word.split("");
        return (
          <div className="flex" key={i}>
            {wordArr.map((letter) => {
              let shown = false;
              if (guessed.includes(letter)) shown = true;

              return <Card key={letter} value={letter} shown={shown} />;
            })}
            <div className="w-12 h-full" />
          </div>
        );
      })}
    </section>
  );
};

const Card = ({ value, shown }: { value: string; shown: boolean }) => {
  return (
    <div
      className={`bg-green-600 text-white w-[4rem] h-[5.6rem] border-2 flex justify-center items-center text-4xl`}
    >
      {shown ? value : null}
    </div>
  );
};

export default Display;
