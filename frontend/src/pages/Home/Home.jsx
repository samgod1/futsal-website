import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaMoneyBill, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
	return (
		<div className="home-page">
			<Navbar />
			<section className="hero">
				<div className="img">
					<img src="/images/futsal.png" alt="futsal" />
				</div>
				<div className="text-container">
					<h1>THE PITCH IS WAITING</h1>
					<p>
						Ready to own the court? Whether it's an early morning session or a
						late-night battle under the lights, your perfect pitch is just a few
						taps away. Grab your squad, lace up, and let's play!
					</p>
					<Link to={"/book-game"}>Book now</Link>
				</div>
			</section>
			<section className="quick-stats">
				<div className="stat">
					<h3>+10k</h3>
					<p>Total users</p>
				</div>
				<div className="stat">
					<h3>+35k</h3>
					<p>Bookings made</p>
				</div>
			</section>
			<hr />
			<section className="quick-info">
				<div className="info">
					<div className="text-group">
						<h3>
							<MdAccessTimeFilled />
							Time
						</h3>
						<p>8:00am-8:00pm</p>
					</div>
					<div className="text-group">
						<h3>
							<FaLocationCrosshairs />
							Location
						</h3>
						<p>Paknajol, Kathmandu</p>
					</div>
					<div className="text-group">
						<h3>
							<FaMoneyBill />
							Pricing
						</h3>
						<p>
							Sun-Fri: Rs 1200
							<br />
							Sat: Rs 1500
						</p>
					</div>
					<div className="text-group">
						<h3>
							<FaPhoneAlt />
							Contact
						</h3>
						<p>9818229900</p>
					</div>
				</div>
				<div className="wrapper">
					<img src="/images/playing-with-ball.jpg" alt="playing-with-ball" />
				</div>
			</section>
		</div>
	);
};

export default Home;
