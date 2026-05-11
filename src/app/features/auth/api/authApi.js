import api from "../../../services/api/axios";

export const loginUser = (data) => {
  return api.post("/auth/login", data);
};

export const getUserProfile = () => {
  return api.get("/auth/me");
};