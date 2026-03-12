import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import Loading from "../components/Loading/Loading";

const MainLayout = ({ children, page }) => {
	const { user, loading, handleLogout } = useContext(UserContext);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className={page}>
			<Navbar user={user} handleLogout={handleLogout} />
			{children}
		</div>
	);
};

export default MainLayout;
