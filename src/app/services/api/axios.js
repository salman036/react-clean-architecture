import axios from "axios";
import { getToken } from "../../features/auth/utils/authStorage";

const api = axios.create({
  baseURL: "https://your-api-url.com/api",
  timeout: 10000,
});

// Attach token automatically
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle global errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized - logout user");
    }
    return Promise.reject(error);
  }
);

export default api;