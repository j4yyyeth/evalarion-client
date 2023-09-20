"use client"

import NavbarDashboard from "@/components/navbars/NavbarDashboard";
import { useLoadingContext } from "@/contexts/loadingContext";

const Languages = () => {
  const { user } = useLoadingContext();
  return (
    <>
      <NavbarDashboard />
      <div className="flex flex-col justify-center items-center space-y-6 p-32">
        <h1>Languages</h1>
        <div>{JSON.stringify(user)}</div>
      </div>
    </>
  );
};

export default Languages;
