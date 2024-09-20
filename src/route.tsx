import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import { Login } from "./pages/Login/Login";
import { Pets } from "./pages/Pets/Pets";
import { Profile } from "./pages/Profile/Profile";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Pets />,
			},

			{
				path: "volunteers",
				element: <div>volunteers</div>,
			},
			{
				path: "applications",
				element: <div>applications</div>,
			},
			{
				path: "profile",
				element: <Profile />,
			},
		],
		errorElement: <div>Error 404 Not found</div>,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);
