import axios from "axios";
// import { Route } from "next";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// });

// const token = localStorage.getItem("authToken");

// api.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//     }
//     return Promise.reject(error);
//   }
// );

// export const get = (route: Route) => {
//   return api.get(route);
// };

// export const post = (route: Route, body: any) => {
//   return api.post(route, body);
// };

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
