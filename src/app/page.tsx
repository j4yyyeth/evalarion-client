"use client"

import Link from "next/link";
import { useThemeContext } from "@/contexts/themeContext";

const Home = () => {
  const { theme } = useThemeContext();
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <Link href="signup">Get Started Today!</Link>
    </div>
  );
};

export default Home;
