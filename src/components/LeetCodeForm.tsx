"use client";

import { useState } from "react";
import axios from "axios";

const LeetCodeForm = () => {
  const [leetCodeUser, setLeetCodeUser] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/add-leetcode`,
        leetCodeUser
      );
    } catch (err) {
      console.log(err);
    }
    // const leetResults = await axios.get(
    //   `https://leetcode-stats-api.herokuapp.com/${leetCodeUser}`
    // );
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
