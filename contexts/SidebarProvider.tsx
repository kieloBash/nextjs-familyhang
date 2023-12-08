"use client";
import * as React from "react";

export type TurnType = "TurnA" | "TurnB" | null;

export type SidebarContextType = {
  toggle: boolean;
  setToggle: (temp: boolean) => void;
  turn: TurnType;
  setTurn: (index: TurnType) => void;
  guessed: string[];
  setGuessed: (index: string[]) => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
  toggle: false,
  setToggle: (index: boolean) => {},
  turn: null,
  setTurn: (index: TurnType) => {},
  guessed: [],
  setGuessed: (index: string[]) => {},
});

export const useSidebar = () => React.useContext(SidebarContext);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [turn, setTurn] = React.useState<TurnType>(null);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [guessed, setGuessed] = React.useState<string[]>([]);

  return (
    <SidebarContext.Provider
      value={{
        toggle,
        setToggle,
        turn,
        setTurn,
        guessed,
        setGuessed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
