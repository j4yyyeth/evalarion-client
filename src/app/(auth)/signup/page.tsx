"use client";

import { useState, useEffect } from "react";
import { post } from "@/services/authService";
import { useAuthContext } from "@/contexts/authContext";
import { useLoadingContext } from "@/contexts/loadingContext";
import { redirect } from "next/navigation";

const SignUp = () => {
  const { authenticateUser } = useAuthContext();
  const { user } = useLoadingContext();
  useEffect(() => {
    if (user) {
      redirect("/dashboard");
    }
  }, [user]);

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
      localStorage.setItem("authToken", res.data.token);
      redirect("/dashboard");
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
      <p>--- OR ---</p>
      <button>Sign Up With Google</button>
      <br />
      <button>Sign Up With Github</button>
    </>
  );
};

export default SignUp;
