"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <label className="switch">
      <input
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        type="checkbox"
      ></input>
      <span className="slider"></span>
    </label>
  );
};

export default ThemeBtn;
