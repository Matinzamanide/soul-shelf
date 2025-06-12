"use client";
import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface IAppContext {
  menu: boolean;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuHandler: () => void;
}

const defaultContext: IAppContext = {
  menu: false,
  id: 0,
  setId: () => {},
  setMenu: () => {},
  menuHandler: () => {},
};

const AppContext = createContext<IAppContext>(defaultContext);

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);

  const menuHandler = () => {
    setMenu((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ menu, setMenu, menuHandler, id, setId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
