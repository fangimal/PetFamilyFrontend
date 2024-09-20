import axios from "axios";
import { Envelope } from "../types/Envelope";
import { handleError } from "../helpers/errorHandler";


const USER_URL = "http://localhost:5000/user";

export type LoginRequest = {
	email: string;
	password: string;
};

export type AuthResponse = {
	token: string;
	role: string;
};

export const loginAPI = async (request: LoginRequest) => {
	try {
		const response = await axios.post<Envelope<AuthResponse>>(
			USER_URL + "/login",
			request
		);

		const token = response.data;

		return token;
	} catch (error) {
		handleError(error);
	}
};
