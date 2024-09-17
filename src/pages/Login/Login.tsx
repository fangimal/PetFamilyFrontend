import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { login, LoginRequest } from "../../services/userService";

const Login = () => {
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (email && password) {
			const request: LoginRequest = { email, password };

			const token = await login(request);

			console.log(token);
		} else {
			alert("email and password required");
		}
	};

	return (
		<div className="flex flex-1 flex-col justify-center items-center w-full mt-60">
			<form
				onSubmit={(e) => handleSubmit(e)}
				className="flex flex-col w-1/4 gap-7"
			>
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input onChange={(e) => setEmail(e.target.value)} type="email" />
				</FormControl>
				<FormControl>
					<FormLabel>Пароль</FormLabel>
					<Input
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
				</FormControl>
				<Button type="submit" className="w-60" colorScheme="blue">
					Войти
				</Button>
			</form>
		</div>
	);
};

export { Login };
