"use client";

import React, { useEffect, createContext, useContext, ReactNode } from "react";
import { get } from "../services/authService";
import { LoadingContext } from "./loadingContext";

interface AuthContextProps {
  authenticateUser: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface Project {
  title: string;
  description: string;
  techStack: string[];
}

interface CodeSnippet {
  codeBlock: string;
  language: string;
  title: string | null;
  description: string | null;
}

export interface User {
  email: string;
  password: string;
  id: number;
  languages: string[];
  languagesToLearn: string[];
  projects: Project[];
  codeSnippets: CodeSnippet[];
  githubUsername: string | null;
  leetCodeUsername: string | null;
  links: string[];
}

interface LoadingContextProps {
  render: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { render, setIsLoading, setUser } = useContext(
    LoadingContext
  ) as LoadingContextProps;

  const authenticateUser = async () => {
    const token = localStorage.getItem("authToken");
    setIsLoading(true);

    if (token) {
      try {
        const res = await get("/auth/verify");
        setUser(res.data);
      } catch (err) {
        localStorage.clear();
        setIsLoading(false);
        console.log("ERROR: ", err);
      } finally {
        setIsLoading(false);
      }
    } else {
      localStorage.clear();
      setIsLoading(false);
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    console.log("we've logged out");
  };

  useEffect(() => {
    authenticateUser();
  }, [render]);

  return (
    <AuthContext.Provider value={{ authenticateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuthContext must be provided");
  }
  return context;
}

export { AuthContext, AuthProvider };
