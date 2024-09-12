import {
	FormControl,
	FormLabel,
	Input,
	Button,
	FormErrorMessage,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
	email: string;
	password: string;
};

const schema = yup
	.object({
		email: yup
			.string()
			.required("Это поле обязательно")
			.email("Это поле должно быть email"),
		password: yup
			.string()
			.required("Это поле обязательно")
			.min(6, "Минимальная длина пароля - 6 символов"),
	})
	.required();

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver: yupResolver(schema) });

	const { login } = useAuth();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		await login(data.email, data.password);
	};

	return (
		<div className="flex flex-col h-screen py-10 px-36 justify-center items-center w-full">
			<Link to="/" className="text-lg">
				← Обратно на Главную
			</Link>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col flex-1 justify-center items-center w-1/4 mx-auto gap-7"
			>
				<FormControl isInvalid={!!errors.email}>
					<FormLabel>Email</FormLabel>
					<Input {...register("email")} />
					{errors.email && (
						<FormErrorMessage>{errors.email.message}</FormErrorMessage>
					)}
				</FormControl>
				<FormControl isInvalid={!!errors.password}>
					<FormLabel>Пароль</FormLabel>
					<Input {...register("password")} />
					{errors.password && (
						<FormErrorMessage>{errors.password.message}</FormErrorMessage>
					)}
				</FormControl>
				<Button type="submit" className="w-60" colorScheme="primary">
					Войти
				</Button>
			</form>
		</div>
	);
};

export { Login };
