import axios from "axios";
import { getAuth } from "../utils/storage";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const axiosClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

axiosClient.interceptors.request.use((config) => {
  const auth = getAuth();

  if (auth && auth.token) {
    config.headers["Authorization"] = `Bearer ${auth.token}`;
  }

  return config;
});