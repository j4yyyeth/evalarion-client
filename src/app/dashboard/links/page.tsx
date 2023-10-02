"use client";

import NavbarDashboard from "@/components/navbars/NavbarDashboard";
import { useLoadingContext } from "@/contexts/loadingContext";

const Links = () => {
  const { user } = useLoadingContext();
  return (
    <>
      <NavbarDashboard />
      <div className="flex flex-col justify-center items-center space-y-6 p-32">
        <h1>Links</h1>
        <div>{JSON.stringify(user?.links)}</div>
      </div>
    </>
  );
};

export default Links;
