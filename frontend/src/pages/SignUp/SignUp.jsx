import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import MainLayout from "../../layouts/MainLayout.jsx";

const SignUp = () => {
	const { handleSignUp } = useContext(UserContext);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		const formData = Object.fromEntries(new FormData(e.target));

		handleSignUp(formData, navigate);
	}
	return (
		<MainLayout page={"signup-page"}>
			<main className="signup">
				<div className="wrapper">
					<form onSubmit={handleSubmit}>
						<div className="text-container">
							<h2>SignUp</h2>
							<p>Let's get you on side</p>
						</div>
						<div className="input-container">
							<div className="input-group">
								<div className="icon">
									<FaUser />
								</div>
								<input
									type="text"
									name="username"
									autoComplete="off"
									placeholder="Username"
								/>
							</div>
							<div className="input-group">
								<div className="icon">
									<MdAlternateEmail />
								</div>
								<input
									type="email"
									name="email"
									autoComplete="off"
									placeholder="Email"
								/>
							</div>
							<div className="input-group">
								<div className="icon">
									<MdLock />
								</div>
								<input
									type="password"
									name="password"
									autoComplete="off"
									placeholder="Password"
								/>
							</div>
							<div className="input-group">
								<div className="icon">
									<MdLock />
								</div>
								<input
									type="password"
									name="confirmPassword"
									autoComplete="off"
									placeholder="Confirm Password"
								/>
							</div>
						</div>
						<button>Sign Up</button>
					</form>
					<p>
						I already have an account <Link to={"/signin"}>Signin</Link>
					</p>
				</div>
			</main>
		</MainLayout>
	);
};

export default SignUp;
