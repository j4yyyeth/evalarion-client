"use client";

import { useState, useContext } from "react";
import axios from "axios";
import { post } from "@/services/authService";
import { useAuthContext } from "@/contexts/authContext";

const SignUp = () => {
  const { authenticateUser } = useAuthContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await post("/auth/signup", form);
      console.log("NOW NAVIGATE TO DASHBOARD");
      localStorage.setItem("authToken", res.data.token);
    } catch (err) {
      console.log(err);
    } finally {
      authenticateUser();
    }
    setForm({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          required
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          required
          onChange={handleChange}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
