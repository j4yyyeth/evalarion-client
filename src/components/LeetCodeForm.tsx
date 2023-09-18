"use client";

import { useState } from "react";
import axios from "axios";

const LeetCodeForm = () => {
  const [leetCodeContents, setLeetCodeContents] = useState("");
  const [leetCodeUser, setLeetCodeUser] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const leetResults = await axios.get(
      `https://leetcode-stats-api.herokuapp.com/${leetCodeUser}`
    );
    console.log(leetResults);
    setLeetCodeContents(leetResults.data);
    // for some reason have to enter twice .. figure out
    console.log(".DATA: ", leetResults.data);
  };
  return (
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
      <button type="submit" className="btn-primary">
        Enter
      </button>
    </form>
  );
};

export default LeetCodeForm;
