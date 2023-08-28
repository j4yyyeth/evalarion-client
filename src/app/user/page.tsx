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

// const User = () => {
//   const [userId, setUserId] = useState(0);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const requestData = {userId};
//       await axios.delete(
//         `${process.env.NEXT_PUBLIC_API_URL}/users/delete`,
//         {
//           data: requestData
//         }
//       );
//       console.log("User deleted successfully");
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>Enter User ID to Delete</label>
//         <input
//           type="number" // Assuming the ID is a number
//           value={userId}
//           onChange={(e) => setUserId(+(e.target.value))}
//           required
//         />
//         <button type="submit">Delete</button>
//       </form>
//     </>
//   );
// };

export default User;
