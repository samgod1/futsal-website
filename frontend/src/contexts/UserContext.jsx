import { createContext, useContext, useEffect, useState } from "react";
import { signin, signup } from "../apis/auth";
import { getUserData } from "../apis/user";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	async function handleSignUp(formData) {
		const data = await signup(formData);
		setUser(data);
		setLoading(false);
	}

	async function handleSignIn(formData) {
		const data = await signin(formData);
		setUser(data);
		setLoading(false);
	}

	async function handleLogout() {}

	async function handleFetchUserData() {
		const data = await getUserData();
		setUser(data);
		setLoading(false);
	}

	useEffect(() => {
		handleFetchUserData();
	}, []);

	return (
		<UserContext.Provider value={{ user, loading, handleSignUp, handleSignIn }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
