import axios from "axios";
import api from "./api";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

export const googleLogin = (credential) => {
    return axios.post(
        `${API_URL}/google`,
        {
            credential,
        }
    );
};

export const getCurrentUser = () => {
  return api.get("/auth/me");
};