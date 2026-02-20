import React from "react";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children, page }) => {
	return (
		<div className={page}>
			<Navbar />
			{children}
		</div>
	);
};

export default MainLayout;
