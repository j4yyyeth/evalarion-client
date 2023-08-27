"use client";

import { useState } from "react";
import axios from "axios";

const User = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {email, username};
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/create`,
        data,
      );
      console.log("USER CREATED", res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <label>Enter Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
        <button type="submit">Enter</button>
      </form>
    </>
  );
};

export default User;
