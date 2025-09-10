import axios from "axios";
import { devServer, getAccessToken } from "../constants/constants";

const api = axios.create({
	baseURL: devServer,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	(config) => {
		const token = getAccessToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.data?.message === "Token expired") {
			sessionStorage.clear();
			window.location.href = "/login";
		}
		return Promise.reject(error);
	}
);

export default api;
