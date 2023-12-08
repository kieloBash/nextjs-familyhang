"use client";
import { useSidebar } from "@/contexts/SidebarProvider";
import { useGame } from "@/providers/GameProvider";
import { HeartCrack } from "lucide-react";
import React from "react";

const Choices = ({ answer }: { answer: string }) => {
  const ALPHABET = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );

  const { game, handleMistake } = useGame();
  const { guessed, setGuessed } = useSidebar();

  if (game.getMistakes() >= 5)
    return (
      <div className="fixed inset-0 bg-white/20 flex justify-center items-center backdrop-blur-md z-10">
        <div className="text-8xl font-bold text-red-600 flex justify-center items-center">
          Out of Lives <HeartCrack className="w-32 h-32 ml-2" />
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-12 grid-rows-3 gap-1 mt-4">
      {ALPHABET.map((val, index) => {
        const className =
          index === 24 ? "col-start-6" : index === 25 ? "col-start-7" : "";

        const selected = guessed.includes(val);

        const selectedClassname = selected
          ? "bg-slate-200"
          : game.getMistakes() >= 5
          ? ""
          : "hover:bg-slate-100";
        return (
          <button
            onClick={() => {
              const prev = [...guessed, val];
              setGuessed(prev);
              if (!answer.toLocaleUpperCase().includes(val)) handleMistake();
            }}
            disabled={selected || game.getMistakes() >= 5}
            className={`${className} ${selectedClassname} p-2 text-lg rounded-md border`}
            type="button"
            key={index}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Choices;
