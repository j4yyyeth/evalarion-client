"use client";

import NavbarDashboard from "@/components/navbars/NavbarDashboard";
import SelectLanguages from "@/components/selectLanguagesBtn/SelectLanguages";
import { useLoadingContext } from "@/contexts/loadingContext";

const Languages = () => {
  const { user } = useLoadingContext();
  return (
    <>
      <NavbarDashboard />
      <div className="flex justify-center items-center gap-5">
        <h1>Languages</h1>
        <p>Current: {JSON.stringify(user?.languages)}</p>
        <p>To Learn: {JSON.stringify(user?.languagesToLearn)}</p>
        <div className="border border-gray-400 p-4 rounded-md">
          <h1>Add Languages:</h1>
          <SelectLanguages endpoint="users/add-language-test" />
        </div>
        <div className="border border-gray-400 p-4 rounded-md">
          <h1>Add Languages to Learn:</h1>
          <SelectLanguages endpoint="users/add-languages-to-learn" />
        </div>
      </div>
    </>
  );
};

export default Languages;
