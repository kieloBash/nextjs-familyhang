"use client";
import Game from "@/constructors/Game";
import * as React from "react";

export type TurnType = "TurnA" | "TurnB" | null;

export type GameContextType = {
  turn: TurnType;
  setTurn: (index: TurnType) => void;
  handleMistake: () => void;
  handleResetMistake: () => void;
  game: Game;
  setGame: (d: Game) => void;
};

export const GameContext = React.createContext<GameContextType>({
  turn: null,
  setTurn: (index: TurnType) => {},
  handleMistake: () => {},
  handleResetMistake: () => {},
  game: new Game(),
  setGame: (d: Game) => {},
});

export const useGame = () => React.useContext(GameContext);

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [turn, setTurn] = React.useState<TurnType>(null);

  const [game, setGame] = React.useState(new Game());

  function handleMistake() {
    setGame((prevGame) => {
      const updatedGame = new Game(prevGame.mistakes);
      updatedGame.increaseMistakes();
      return updatedGame;
    });
  }

  function handleResetMistake() {
    setGame((prevGame) => {
      const updatedGame = new Game(prevGame.mistakes);
      updatedGame.resetMistakes();
      return updatedGame;
    });
  }

  return (
    <GameContext.Provider
      value={{
        turn,
        setTurn,
        handleMistake,
        handleResetMistake,
        game,
        setGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
