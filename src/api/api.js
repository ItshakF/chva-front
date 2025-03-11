import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});
export const registerUser = (data) => api.post("/register", data);
export const loginUser = (data) => api.post("/login", data);
export const fetchUsers = () => api.get("/users");
export const logoutUser = () => api.post("/logout");

export default api;