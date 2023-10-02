"use client"

import AddProject from "@/components/AddProject";
import NavbarDashboard from "@/components/navbars/NavbarDashboard";
import { useLoadingContext } from "@/contexts/loadingContext";

const Projects = () => {
  const { user } = useLoadingContext();
  return (
    <>
      <NavbarDashboard />
      <div className="flex-col justify-center items-center w-1/3 ml-56">
      <div className="flex flex-col items-center">
        <h1>Projects</h1>
        <p>{JSON.stringify(user?.projects)}</p>
      </div>
      <div className="border border-gray-400 p-4 rounded-md">
        <h1>Add Project:</h1>
        <AddProject />
      </div>
      </div>
    </>
  );
};

export default Projects;
