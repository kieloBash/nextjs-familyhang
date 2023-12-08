"use client";
import { useGame } from "@/providers/GameProvider";
import { Heart } from "lucide-react";
import React from "react";

const Scoreboard = () => {
  const { game } = useGame();
  return (
    <div className="fixed bottom-4 right-4 p-4 w-56 bg-green-400 grid grid-cols-5 text-2xl">
      <span className="col-span-2 font-medium">Lives</span>
      <div className="col-span-3 flex justify-start items-center">
        {Array(3 - game.getMistakes())
          .fill([])
          .map((_, index) => {
            return (
              <div key={index} className="">
                <Heart className="w-8 h-8 fill-red-500" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Scoreboard;
