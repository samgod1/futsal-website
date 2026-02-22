import { createContext, useContext, useEffect, useState } from "react";
import { logout, signin, signup } from "../apis/auth";
import { getUserData } from "../apis/user";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	async function handleSignUp(formData, navigate) {
		const data = await signup(formData);
		if (!data) {
			return;
		}
		setUser(data);
		setLoading(false);
		navigate("/book-game");
	}

	async function handleSignIn(formData, navigate) {
		const data = await signin(formData);
		if (!data) {
			return;
		}
		setUser(data);
		setLoading(false);
		navigate("/book-game");
	}

	async function handleLogout(navigate) {
		const data = await logout();
		if (!data) {
			return;
		}
		setUser(null);
		navigate("/");
	}

	async function handleFetchUserData() {
		const data = await getUserData();
		setUser(data);
		setLoading(false);
	}

	useEffect(() => {
		handleFetchUserData();
	}, []);

	return (
		<UserContext.Provider
			value={{ user, loading, handleSignUp, handleSignIn, handleLogout }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
