import axios from "axios";

const USER_URL = "http://localhost:5000/user";

export type LoginRequest = {
	email: string;
	password: string;
};

export const login = async (request: LoginRequest): Promise<string> => {
	const response = await axios.post(USER_URL + "/login", request);

	const token = response.data;

	return token;
};
