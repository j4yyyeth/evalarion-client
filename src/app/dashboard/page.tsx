"use client";

/*

TODO: 
- SSR the dashboard except for the interactive components
- Separate each api call into components ie Leetcode, Github, etc
- Have a side nav in this page routing to each feature: leetcode, github, editor, snippets, languages, links, etc.

*/

import { useState, FormEvent } from "react";
import axios from "axios";
import { SiLeetcode } from "react-icons/si";
import { BiLogoGithub } from "react-icons/bi";
import SelectLanguages from "@/components/selectLanguagesBtn/SelectLanguages";
import AddProject from "@/components/AddProject";
import AddLink from "@/components/AddLink";
import Editor from "@/components/Editor";

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
  const [leetCodeUser, setLeetCodeUser] = useState("");
  const [leetCodeContents, setLeetCodeContents] = useState<LeetCodeData | null>(
    null
  );
  const [githubUser, setGithubUser] = useState("");
  const [githubContents, setGithubContents] = useState<GithubData | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const leetResults = await axios.get(
      `https://leetcode-stats-api.herokuapp.com/${leetCodeUser}`
    );
    setLeetCodeContents(leetResults.data);

    const githubResults = await axios.get(
      `https://api.github.com/users/${githubUser}`
    );
    setGithubContents(githubResults.data);
    console.log(githubResults.data);
  };

  // TODO: Loop through all repos: count stars and grab language
  // https://api.github.com/users/j4yyyeth/repos
  return (
    <div className="flex flex-col justify-center items-center space-y-6 p-8">
      <div className="border border-gray-400 p-4 rounded-md">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="border border-gray-400 p-4 rounded-md">
          <label htmlFor="leetCodeUser" className="text-lg font-semibold">
            Enter Leetcode User:
          </label>
          <input
            type="text"
            id="leetCodeUser"
            name="leetCodeUser"
            onChange={(e) => setLeetCodeUser(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="border border-gray-400 p-4 rounded-md">
          <label htmlFor="githubUser" className="text-lg font-semibold">
            Enter Github User:
          </label>
          <input
            type="text"
            id="githubUser"
            name="githubUser"
            onChange={(e) => setGithubUser(e.target.value)}
            className="input-field"
          />
        </div>

        <button type="submit" className="btn-primary">
          Enter
        </button>
      </form>

      <div className="dashboard-section">
        <div className="border border-gray-400 p-4 rounded-md">
          <h1 className="text-2xl font-semibold">LEETCODE:</h1>
          <SiLeetcode size={50} />
        </div>

        <div className="max-h-80 overflow-y-auto bg-gray-100 rounded-lg p-4">
          {leetCodeContents && (
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(leetCodeContents, null, 2)}
            </pre>
          )}
        </div>
      </div>

      <div className="dashboard-section">
        <div className="border border-gray-400 p-4 rounded-md">
          <h1 className="text-2xl font-semibold">GITHUB:</h1>
          <BiLogoGithub size={50} />
        </div>

        <div className="max-h-80 overflow-y-auto bg-gray-100 rounded-lg p-4">
          {githubContents && (
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(githubContents, null, 2)}
            </pre>
          )}
        </div>
      </div>

      <div className="border border-gray-400 p-4 rounded-md">
        <h1>Add Languages:</h1>
        <SelectLanguages endpoint="users/add-languages" />
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
  );
};

export default Dashboard;
