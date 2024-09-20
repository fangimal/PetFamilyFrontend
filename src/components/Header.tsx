import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Header = () => {
	const { isLoggedIn, logout } = useAuth();

	return (
		<header className="w-full flex flex-row justify-between px-4 py-3 items-center bg-red-400 shadow-xl">
			<Icon style={{ color: "#fff" }} width="52" height="52" icon="mdi:cat" />
			<span className="text-5xl text-white">Pet Family</span>
			<div className="flex flex-row gap-3">
				<Link to={isLoggedIn ? "/profile" : "/login"}>
					<Icon
						style={{ color: "#fff" }}
						icon="ri:user-line"
						width="52"
						height="52"
					/>
				</Link>
				<Icon
					width="52"
					style={{ color: "#fff" }}
					height="52"
					icon="material-symbols:logout"
					onClick={() => logout()}
				/>
			</div>
		</header>
	);
};

export { Header };
