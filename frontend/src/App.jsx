import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Home from "./pages/Home/Home";
import VisitUs from "./pages/VisitUs/VisitUs";
import BookGame from "./pages/BookGame/BookGame";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Success from "./pages/Success/Success";
import Failure from "./pages/Failure/Failure";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/visit-us",
			element: <VisitUs />,
		},
		{
			path: "/book-game",
			element: <BookGame />,
		},
		{
			path: "/signin",
			element: <SignIn />,
		},
		{
			path: "/signup",
			element: <SignUp />,
		},
		{
			path: "/success",
			element: <Success />,
		},
		{
			path: "/failure",
			element: <Failure />,
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
			<Toaster />
		</>
	);
};

export default App;
