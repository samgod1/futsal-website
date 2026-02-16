import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import { MdAlternateEmail, MdLock } from "react-icons/md";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
	return (
		<div className="page">
			<Navbar />
			<main className="signin">
				<div className="wrapper">
					<form>
						<div className="text-container">
							<h2>SignIn</h2>
							<p>Let's get you on side</p>
						</div>
						<div className="input-container">
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
						</div>
						<button>Sign In</button>
					</form>
					<p>
						I don't have an account <Link to={"/signup"}>Signup</Link>
					</p>
				</div>
			</main>
		</div>
	);
};

export default SignIn;
