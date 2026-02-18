import { createContext, useContext, useState } from "react";
import { signup } from "../apis/auth";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState();

	const handleSignUp = async (formData) => {
		const data = await signup(formData);
		setUser(data);
		console.log(data);
	};

	return (
		<UserContext.Provider value={{ user, handleSignUp }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
