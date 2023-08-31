"use client"

import { useState, useEffect } from "react";
import axios from "axios";

const User = ({
  params: { id },
}: {
  params: { id: number };
}) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/users/info/${id}`
      );
      const data = response.data;
      console.log(data.codeSnippets);
      setUserData(data);
      setLoading(false);
    } catch (err) {
      console.error("Error Dataing user data:", err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loading? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>User Data</h1>
          <div>
            <p>ID: {id}</p>
            <p>Email: {userData.email}</p>
            {userData.codeSnippets.map((e: any, i: number) => {
              return <p key={i}>{e.codeBlock}</p>;
            })}
          </div>
        </div>
      )}
    </>
  )
};

export default User;
