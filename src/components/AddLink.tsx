"use client";

import { useState } from "react";
import axios from "axios";

const AddLink = () => {
  const handleSubmit = async () => {
    const res = await axios.post("");
  };
  return (
    <form>
      <input type="url" name="url" placeholder="Enter URL" required></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddLink;
