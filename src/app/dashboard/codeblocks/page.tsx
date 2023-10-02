"use client";

import NavbarDashboard from "@/components/navbars/NavbarDashboard";
import { useLoadingContext } from "@/contexts/loadingContext";

const CodeBlocks = () => {
  const { user } = useLoadingContext();
  return (
    <>
      <NavbarDashboard />
      <div className="flex flex-col justify-center items-center space-y-6 p-32">
        <h1>Code Blocks</h1>
        <p>{JSON.stringify(user?.codeSnippets)}</p>
      </div>
    </>
  );
};

export default CodeBlocks;
