import axios from "axios";

export const get = (route: any) => {
  let token = localStorage.getItem("authToken");
  return axios.get(process.env.NEXT_PUBLIC_API_URL + route, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const post = (route: any, body: any) => {
  let token = localStorage.getItem("authToken");
  return axios.post(process.env.NEXT_PUBLIC_API_URL + route, body, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
