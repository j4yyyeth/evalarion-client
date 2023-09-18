"use client";

import { useState } from "react";
import axios from "axios";

const GithubForm = () => {
  const [githubContents, setGithubContents] = useState("");
  const [githubUser, setGithubUser] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const githubResults = await axios.get(
      `https://api.github.com/users/${githubUser}`
    );
    setGithubContents(githubResults.data);
    console.log(githubResults.data);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
  );
};

export default GithubForm;
