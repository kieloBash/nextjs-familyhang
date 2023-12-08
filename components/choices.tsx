"use client";
import { useSidebar } from "@/contexts/SidebarProvider";
import React from "react";

const Choices = () => {
  const ALPHABET = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );

  const { guessed, setGuessed } = useSidebar();
  return (
    <div className="grid grid-cols-12 grid-rows-3 gap-1 mt-4">
      {ALPHABET.map((val, index) => {
        const className =
          index === 24 ? "col-start-6" : index === 25 ? "col-start-7" : "";

        const selected = guessed.includes(val);

        const selectedClassname = selected ? "" : "hover:bg-slate-100 border";
        return (
          <button
            onClick={() => {
              const prev = [...guessed, val];
              setGuessed(prev);
            }}
            disabled={selected}
            className={`${className} ${selectedClassname} p-2 text-lg rounded-md`}
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
