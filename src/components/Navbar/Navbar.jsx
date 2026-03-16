import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

import "./Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ user, handleLogout }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

	const hamburgerMenuRef = useRef(null);

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

	function closeHamburgerMenu(navigation) {
		hamburgerMenuRef.current.style.transform = "translateX(100%)";
		hamburgerMenuRef.current.addEventListener(
			"transitionend",
			() => {
				setIsHamburgerMenuOpen(false);
				if (navigation) {
					navigate(`/${navigation}`);
				}
			},
			{ once: true },
		);
	}

	useGSAP(() => {
		if (location.pathname === "/") {
			gsap.to("nav", {
				backdropFilter: "blur(50px)",
				color: "var(--c-dark)",
				scrollTrigger: {
					trigger: ".hero",
					start: "center top",
					toggleActions: "play none none reverse",
				},
			});
		}
	}, [location.pathname]);

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

	useEffect(() => {
		if (isHamburgerMenuOpen) {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					hamburgerMenuRef.current.style.transform = "translateX(0%)";
				});
			});
		}
	}, [isHamburgerMenuOpen]);

	return (
		<>
			<nav className={isActive("/") ? "fixed" : ""}>
				<div className="website-name">KUMARI FUTSAL</div>
				<div className="links-container">
					<Link className={isActive("/") ? "selected-link" : ""} to={"/"}>
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
						to={"/book-game"}
					>
						BOOK GAME
					</Link>
				</div>
				{user ? (
					<div
						className="username-wrapper"
						ref={dropdownRef}
						onClick={handleUsernameClick}
					>
						<FaUserCircle size={25} />
						<div className="username">{user?.username?.toUpperCase()}</div>
						{isDropdownOpen && (
							<div className="dropdown">
								<button
									className="logout"
									onClick={() => {
										handleLogout(navigate);
									}}
								>
									Logout
								</button>
							</div>
						)}
					</div>
				) : (
					<Link
						className={
							isActive("/signin") ? "sign-in selected-link" : "sign-in"
						}
						to={"/signin"}
					>
						SIGN IN
					</Link>
				)}
				{/* HamburgerMenu */}
				<button
					className="hamburger"
					onClick={() => {
						setIsHamburgerMenuOpen(true);
					}}
				>
					<GiHamburgerMenu size={20} />
				</button>
			</nav>

			{/* Hamburger Menu Background */}
			<div
				className={
					isHamburgerMenuOpen
						? "hamburger-menu-background visible"
						: "hamburger-menu-background"
				}
				onClick={() => {
					closeHamburgerMenu();
				}}
			>
				<div
					className={isHamburgerMenuOpen ? "menu visible" : "menu"}
					ref={hamburgerMenuRef}
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<button
						className="close-button"
						onClick={() => {
							closeHamburgerMenu();
						}}
					>
						<IoClose size={20} />
					</button>

					<div className="links-container">
						<button
							className={isActive("/") ? "selected-link" : ""}
							onClick={() => {
								closeHamburgerMenu("/");
							}}
						>
							Home
						</button>
						<button
							className={isActive("/visit-us") ? "selected-link" : ""}
							onClick={() => {
								closeHamburgerMenu("/visit-us");
							}}
						>
							Visit Us
						</button>
						<button
							className={isActive("/book-game") ? "selected-link" : ""}
							onClick={() => {
								closeHamburgerMenu("/book-game");
							}}
						>
							Book Game
						</button>
					</div>
					{user && (
						<button
							className="logout"
							onClick={() => {
								handleLogout(navigate);
								if (isHamburgerMenuOpen) {
									closeHamburgerMenu();
								}
							}}
						>
							Logout
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
