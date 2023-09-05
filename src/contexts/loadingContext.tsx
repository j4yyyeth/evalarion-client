"use client";

import React, { useState, createContext, ReactNode } from "react";
import { get } from "../services/authService";
import { User } from "./authContext";

interface LoadingProviderProps {
  children: ReactNode;
}

export interface LoadingContextProps {
  render: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextProps | null>(null);

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [render, setRender] = useState(false);

  //   const getExercisesLibrary = () => {
  //     get("/exercises")
  //       .then((results) => {
  //         setExerciseLibrary(results.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <LoadingContext.Provider
      value={{
        render,
        setRender,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoadingContext() {
  const context = React.useContext(LoadingContext);
  if (!context) {
    throw new Error("UseLoadingContext must be provided");
  }
  return context;
}

export { LoadingContext, LoadingProvider };
