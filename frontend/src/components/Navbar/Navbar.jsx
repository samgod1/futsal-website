import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";
import { useEffect } from "react";

const Navbar = () => {
	const location = useLocation();
	function isActive(path) {
		if (path === location.pathname) {
			return true;
		}

		return false;
	}
	return (
		<nav>
			<div className="website-name">KUMARI FUTSAL</div>
			<div className="links-container">
				<Link className={isActive("/") ? "selected-link" : ""} to="/">
					HOME
				</Link>
				<Link
					className={isActive("/visit-us") ? "selected-link" : ""}
					to={"/visit-us"}
				>
					VISIT US
				</Link>
				<Link
					className={isActive("/book-session") ? "selected-link" : ""}
					to="/book-session"
				>
					BOOK SESSION
				</Link>
			</div>
			<Link
				className={isActive("/sign-in") ? "sign-in selected-link" : "sign-in"}
				to={"/sign-in"}
			>
				SIGN IN
			</Link>
		</nav>
	);
};

export default Navbar;
