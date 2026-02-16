import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import "./Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
	const location = useLocation();

	function isActive(path) {
		if (path === location.pathname) {
			return true;
		}

		return false;
	}

	useGSAP(() => {
		if (location.pathname === "/") {
			gsap.to("nav", {
				backdropFilter: "blur(25px)",
				scrollTrigger: {
					trigger: "nav",
					start: "center top",
					toggleActions: "play none none reverse",
				},
			});
		}
	}, [location.pathname]);

	return (
		<nav className={isActive("/") ? "fixed" : ""}>
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
					className={isActive("/book-game") ? "selected-link" : ""}
					to="/book-game"
				>
					BOOK GAME
				</Link>
			</div>
			<Link
				className={isActive("/signin") ? "sign-in selected-link" : "sign-in"}
				to={"/signin"}
			>
				SIGN IN
			</Link>
		</nav>
	);
};

export default Navbar;
