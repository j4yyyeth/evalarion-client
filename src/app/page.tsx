"use client"

import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [ data, setData ] = useState<string>('');
  const fetchData = async () => {
    try {
      const testData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/test/one`);
      setData(testData.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
      <h1>Home Page</h1>
      <h2>{data}</h2>
    </>
  );
};

export default Home;
