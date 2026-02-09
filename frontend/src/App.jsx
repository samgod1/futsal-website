import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
