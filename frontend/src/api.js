
import axios from "axios";

const productionApiUrl = "https://gb-automate-ai-agent-back.onrender.com";
const configuredApiUrl = import.meta.env.VITE_SERVER_URL;
const configuredApiUrlIsLocal =
  /^https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?(?:\/|$)/i.test(
    configuredApiUrl || ""
  );
const apiBaseUrl =
  import.meta.env.PROD && (!configuredApiUrl || configuredApiUrlIsLocal)
    ? productionApiUrl
    : configuredApiUrl || "http://localhost:8000";

const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

export default api;
