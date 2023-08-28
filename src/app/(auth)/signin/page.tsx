"use client";

import { useState } from "react";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("FORM: ", form);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        ></input>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default SignIn;
