import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail, MdLock } from "react-icons/md";

import Navbar from "../../components/Navbar/Navbar";
import "./SignUp.css";

const SignUp = () => {
	return (
		<div className="page">
			<Navbar />
			<main className="signup">
				<div className="wrapper">
					<form>
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
		</div>
	);
};

export default SignUp;
