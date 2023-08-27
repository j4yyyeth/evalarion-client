"use client";

// TODO: SSR the dashboard except for the interactive components

import { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import { SiLeetcode } from 'react-icons/si';
import { BiLogoGithub } from 'react-icons/bi';

type LeetCodeData = {
  totalSolved: number,
  totalQuestions: number,
  easySolved: number,
  totalEasy: number,
  mediumSolved: number,
  totalMedium: number,
  hardSolved: number,
  totalHard: number,
}

type GithubData = {
  publicRepos: number,
  // repoStars: number,
  // repoLanguage: string,
}

const Dashboard = () => {
  const [leetCodeUser, setLeetCodeUser] = useState("");
  const [leetCodeContents, setLeetCodeContents] = useState<LeetCodeData | null>(null);
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
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Leetcode User:</label>
        <input
          name="leetCodeUser"
          onChange={(e) => setLeetCodeUser(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
        <label>Enter Github User:</label>
        <input
          name="githubUser"
          onChange={(e) => setGithubUser(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-5">
          Enter
        </button>
      </form>
      <h1>Dashboard</h1>
      <div className="p-5 h-40 w-full">
        <h1>LEETCODE:</h1>
        <SiLeetcode size={50} />
        {leetCodeContents && JSON.stringify(leetCodeContents)}
      </div>
      <div className="p-5 h-40 w-full">
        <h1>GITHUB:</h1>
        < BiLogoGithub size={50} />
        {githubContents && JSON.stringify(githubContents)}
      </div>
    </>
  );
};

export default Dashboard;
