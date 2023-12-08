"use client";
import { useSidebar } from "@/contexts/SidebarProvider";
import { useGame } from "@/providers/GameProvider";
import { HeartCrack } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const Choices = ({ answer }: { answer: string }) => {
  const ALPHABET = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );

  const { game, handleMistake, handleResetMistake } = useGame();
  const { guessed, setGuessed } = useSidebar();

  const incorrectRef = useRef<HTMLAudioElement | null>(null);
  const correctRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (incorrectRef.current) {
      incorrectRef.current.autoplay = false;
    }
    if (correctRef.current) {
      correctRef.current.autoplay = false;
    }
  }, []);

  //make a pop up when a mistake is done
  const [showPopup, setShowPopup] = React.useState(false);

  useEffect(() => {
    if (game.getMistakes() < 3 && game.getMistakes() !== 0) {
      // Show the pop-up if the number of mistakes is equal to or exceeds 3
      setShowPopup(true);

      // Set a timeout to hide the pop-up after 1000 milliseconds (1 second)
      const timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 1000);

      // Clean up the timeout when the component unmounts or when showPopup changes
      return () => clearTimeout(timeoutId);
    }
  }, [game.getMistakes()]);

  if (game.getMistakes() >= 3) {
    return (
      <div className="fixed inset-0 bg-white/10 flex flex-col justify-center items-center backdrop-blur-md z-10">
        <div className="text-8xl font-extrabold text-red-500 drop-shadow-md flex justify-center items-center">
          Out of Lives <HeartCrack className="w-32 h-32 ml-2" />
        </div>
        <Button
          type="button"
          onClick={handleResetMistake}
          className="w-48 h-16 text-2xl bg-green-700"
        >
          Start Again
        </Button>
      </div>
    );
  }

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center text-red-500 z-[100] text-[24rem] font-black">
          X
        </div>
      )}
      <div className="grid grid-cols-12 grid-rows-3 gap-1 mt-4">
        <div className="hidden">
          <audio
            ref={incorrectRef}
            src={"/assets/sfx/incorrect.mp3"}
            autoPlay={false}
          />
          <audio
            ref={correctRef}
            src={"/assets/sfx/correct.mp3"}
            autoPlay={false}
          />
        </div>
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
                if (!answer.toLocaleUpperCase().includes(val)) {
                  if (incorrectRef.current) {
                    incorrectRef.current.currentTime = 0; // Rewind to the beginning
                    incorrectRef.current.play();
                  }
                  handleMistake();
                } else {
                  if (correctRef.current) {
                    correctRef.current.currentTime = 0; // Rewind to the beginning
                    correctRef.current.play();
                  }
                }
              }}
              disabled={selected || game.getMistakes() >= 3}
              className={`${className} ${selectedClassname} p-2 text-lg rounded-md border`}
              type="button"
              key={index}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Choices;
