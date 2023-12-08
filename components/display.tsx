import React from "react";

const Display = ({ answer }: { answer: string }) => {
  let temp = "It is more fun in the Philippines";
  const splitted = temp.toLocaleUpperCase().split(" ");
  let displayQuestion: string[] = [];

  splitted.map((word) => {
    for (let i = 0; i < word.length; i++) {
      displayQuestion.push(word.charAt(i));
    }
    displayQuestion.push("-");
  });

  return (
    <section className="grid grid-rows-4 border gap-1 grid-container">
      {Array(64)
        .fill(displayQuestion)
        .map((arr, index) => {
          if (index < 16)
            return (
              <div
                className="w-[4rem] h-[5.6rem] bg-green-600 border-2 flex justify-center items-center text-4xl text-white"
                key={index}
              ></div>
            );

          const value = arr[index-16];

          if (value && value !== "-") {
            return (
              <div
                className="w-[4rem] h-[5.6rem] bg-white border-2 flex justify-center items-center text-4xl text-black"
                key={index}
              >{value}</div>
            );
          } else
            return (
              <div
                className="w-[4rem] h-[5.6rem] bg-green-600 border-2 flex justify-center items-center text-4xl text-white"
                key={index}
              ></div>
            );
        })}
    </section>
  );
};

export default Display;
