"use client";

/*

TODO: 
- SSR the dashboard except for the interactive components
- Separate each api call into components ie Leetcode, Github, etc
- Insert github user / leetcode user in DB on submit

*/

//
import { useState, FormEvent, useEffect } from "react";
import { SiLeetcode } from "react-icons/si";
import { BiLogoGithub } from "react-icons/bi";
import SelectLanguages from "@/components/selectLanguagesBtn/SelectLanguages";
import AddProject from "@/components/AddProject";
import AddLink from "@/components/AddLink";
import Editor from "@/components/Editor";
import NavbarDashboard from "@/components/navbars/NavbarDashboard";
import { useLoadingContext } from "@/contexts/loadingContext";
import { useRouter } from "next/navigation";
import GithubForm from "@/components/GithubForm";
import LeetCodeForm from "@/components/leetCodeForm";

type LeetCodeData = {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
};

type GithubData = {
  publicRepos: number;
  // repoStars: number,
  // repoLanguage: string,
};

const Dashboard = () => {
  const { user } = useLoadingContext();
  const [leetCodeUser, setLeetCodeUser] = useState("");
  const [leetCodeContents, setLeetCodeContents] = useState<LeetCodeData | null>(
    null
  );
  const [githubUser, setGithubUser] = useState("");
  const [githubContents, setGithubContents] = useState<GithubData | null>(null);

  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      router.push("/dashboard");
    }
  }, [user]);

  // TODO: Loop through all repos: count stars and grab language
  // https://api.github.com/users/j4yyyeth/repos
  if (!user) {
    return null;
  }

  return (
    <>
      <NavbarDashboard />
      <div className="flex flex-col justify-center items-center space-y-6 p-32">
        <div className="border border-gray-400 p-4 rounded-md text-center">
          <div className="flex flex-col items-center">
            <p>USER: {JSON.stringify(user)}</p>
          </div>
        </div>
        <>
          {!user.githubUsername ? <GithubForm /> : <></>}
          {!user.leetCodeUsername ? <LeetCodeForm /> : <></>}
        </>
        <div className="border border-gray-400 p-4 rounded-md">
          <h1>Add Languages:</h1>
          <SelectLanguages endpoint="users/add-language-test" />
        </div>
        <div className="border border-gray-400 p-4 rounded-md">
          <h1>Add Languages to Learn:</h1>
          <SelectLanguages endpoint="users/add-languages-to-learn" />
        </div>
        
        <div className="border border-gray-400 p-4 rounded-md">
          <h1>Add Project:</h1>
          <AddProject />
        </div>
        <div className="border border-gray-400 p-4 rounded-md">
          <h1>Add Link:</h1>
          <AddLink />
        </div>
        <div className="border border-gray-400 p-4 rounded-md">
          <h1>Add Code Block:</h1>
          <Editor />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
