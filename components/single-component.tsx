"use client";
import React from "react";
import Display from "./display";
import Choices from "./choices";
import Scoreboard from "./scoreboard";
import { useSidebar } from "@/contexts/SidebarProvider";
import { useGame } from "@/providers/GameProvider";

const SingleComponent = ({ answer }: { answer: string }) => {
  const { setGuessed } = useSidebar();
  const { handleResetMistake } = useGame();

  React.useEffect(() => {
    handleResetMistake();
    setGuessed([]);
  }, []);

  return (
    <>
      <Display answer={answer as string} />
      <Choices answer={answer as string} />
      <Scoreboard />
    </>
  );
};

export default SingleComponent;
