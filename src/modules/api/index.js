import axios from "axios";

export const defaultApi = axios.create({
  baseURL: "http://127.0.0.1:4001",
});

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms*1000));