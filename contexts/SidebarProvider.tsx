"use client";
import * as React from "react";

export type TurnType = "TurnA" | "TurnB" | null;

export type SidebarContextType = {
  toggle: boolean;
  setToggle: (temp: boolean) => void;
  turn: TurnType;
  setTurn: (index: TurnType) => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
  toggle: false,
  setToggle: (index: boolean) => {},
  turn: null,
  setTurn: (index: TurnType) => {},
});

export const useSidebar = () => React.useContext(SidebarContext);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [turn, setTurn] = React.useState<TurnType>(null);
  const [toggle, setToggle] = React.useState<boolean>(false);
  return (
    <SidebarContext.Provider
      value={{
        toggle,
        setToggle,
        turn,
        setTurn,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
