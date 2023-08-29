"use client";

import { ThemeProvider } from "next-themes";

type ThemeProps = {
  children: React.ReactNode;
};

const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Theme;
