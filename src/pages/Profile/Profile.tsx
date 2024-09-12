import { useAuth } from "../../providers/AuthProvider";

const Profile = () => {
	const { token, role } = useAuth();

	return (
		<section className="w-full">
			<h1>{token}</h1>
			<h1>{role}</h1>
		</section>
	);
};

export { Profile };
