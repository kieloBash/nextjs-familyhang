import React from "react";

const Display = () => {
  return (
    <section className="grid grid-cols-12 grid-rows-4 border gap-1">
      {Array(48)
        .fill([])
        .map((_, index) => {
          return <div className="w-[4rem] h-[5.6rem] bg-green-600 border-2" key={index}></div>;
        })}
    </section>
  );
};

export default Display;
