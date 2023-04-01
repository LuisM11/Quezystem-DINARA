import axios from "axios";

export const defaultApi = axios.create({
  baseURL: "http://127.0.0.1:4001/api/v1",
});
export const authenticationApi = axios.create({
  baseURL: "http://127.0.0.1:4001/api/v1",
  /* headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, */
});

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms*1000));