import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { LoginRequest, loginAPI } from "../services/userService";
import { useToast } from "@chakra-ui/react";
import { redirect } from "react-router-dom";

type AuthContextType = {
	token: string | null;
	role: string | null;
	isLoggedIn: boolean;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
	const authContext = useContext(AuthContext);

	if (!authContext) {
		throw new Error("useAuth must be used within a AuthProvider");
	}

	return authContext;
};

type Props = {
	children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
	const toast = useToast();

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState<string | null>(null);
	const [role, setRole] = useState<string | null>(null);

	useEffect(() => {
		const token = getToken();
		const role = getRole();

		if (token) {
			setToken(token);
			setRole(role);
			setIsLoggedIn(true);
		}
	}, []);

	const login = async (email: string, password: string) => {
		const request: LoginRequest = { email, password };

		const response = await loginAPI(request);

		if (response?.result) {
			setAuthData(response.result.token, response.result.role);

			toast({
				title: "Успешный вход",
				status: "success",
				duration: 3000,
				isClosable: false,
			});

			setIsLoggedIn(true);
		}
	};

	const logout = async () => {
		removeToken();
		removeRole();

		setIsLoggedIn(false);
	};

	const getToken = () => localStorage.getItem("token");
	const getRole = () => localStorage.getItem("role");

	const removeToken = () => localStorage.removeItem("token");
	const removeRole = () => localStorage.removeItem("role");

	const setAuthData = (token: string, role: string) => {
		localStorage.setItem("token", token);
		localStorage.setItem("role", role);

		setToken(token);
		setRole(role);
	};

	return (
		<AuthContext.Provider value={{ token, role, isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
