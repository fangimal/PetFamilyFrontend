import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Pets } from "./pages/Pets";
import { Login } from "./pages/Login/Login";

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
				path: "/login",
				element: <Login />,
			},
			{
				path: "volunteers",
				element: <div>volunteers</div>,
			},
			{
				path: "applications",
				element: <div>applications</div>,
			},
		],
		errorElement: <div>Error 404 Not found</div>,
	},
]);
