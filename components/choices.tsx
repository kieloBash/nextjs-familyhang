"use client";
import React from "react";

const Choices = () => {
  const ALPHABET = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );
  return (
    <div className="grid grid-cols-12 grid-rows-3 gap-1 mt-4">
      {ALPHABET.map((val, index) => {
        const className =
          index === 24 ? "col-start-6" : index === 25 ? "col-start-7" : "";
        return (
          <button
            className={`${className} p-2 hover:bg-slate-100 text-lg rounded-md`}
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
