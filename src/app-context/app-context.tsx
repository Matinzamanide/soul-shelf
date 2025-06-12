"use client";
import React from "react";
import { IChildren } from "@/components/container/container";
import { createContext, useState } from "react";
interface IAppContext {
  menu: boolean;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuHandler: () => void;
}

const AppContext = createContext({} as IAppContext);

export const AppContextProvider: React.FC<IChildren> = ({ children }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const menuHandler = () => {
    setMenu(!menu);
  };
  return (
    <AppContext.Provider value={{ menu, setMenu, menuHandler, id, setId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
