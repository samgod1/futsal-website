import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

import "./Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ user, handleLogout }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const dropdownRef = useRef();

	const location = useLocation();
	const navigate = useNavigate();

	function isActive(path) {
		if (path === location.pathname) {
			return true;
		}

		return false;
	}

	function handleUsernameClick() {
		setIsDropdownOpen(true);
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

	useGSAP(() => {
		if (isDropdownOpen) {
			gsap.to(".dropdown", {
				display: "flex",
			});
		} else {
			gsap.to(".dropdown", {
				display: "none",
			});
		}
	}, [isDropdownOpen]);

	useEffect(() => {
		if (!isDropdownOpen) {
			return;
		}

		function handleMousedown(e) {
			if (!dropdownRef.current.contains(e.target)) {
				setIsDropdownOpen(false);
			}
		}

		if (isDropdownOpen) {
			document.addEventListener("mousedown", handleMousedown);
		}

		return () => {
			document.removeEventListener("mousedown", handleMousedown);
		};
	}, [isDropdownOpen]);

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
			{user ? (
				<div className="username-wrapper" onClick={handleUsernameClick}>
					<div className="username">{user.username.toUpperCase()}</div>

					<div className="dropdown" ref={dropdownRef}>
						<button
							className="logout"
							onClick={() => {
								handleLogout(navigate);
							}}
						>
							Logout
						</button>
					</div>
				</div>
			) : (
				<Link
					className={isActive("/signin") ? "sign-in selected-link" : "sign-in"}
					to={"/signin"}
				>
					SIGN IN
				</Link>
			)}
		</nav>
	);
};

export default Navbar;
