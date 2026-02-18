import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Home from "./pages/Home/Home";
import VisitUs from "./pages/VisitUs/VisitUs";
import BookGame from "./pages/BookGame/BookGame";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

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
	]);
	return (
		<>
			<RouterProvider router={router} />
			<Toaster />
		</>
	);
};

export default App;
