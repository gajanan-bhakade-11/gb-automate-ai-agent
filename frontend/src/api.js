
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || "https://gb-automate-ai-agent-back.onrender.com",
  withCredentials: true,
});

export default api;
