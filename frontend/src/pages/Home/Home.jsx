import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
	return (
		<div className="home-page">
			<Navbar />
			<section className="hero-section">
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
					<button>Book now</button>
				</div>
			</section>
		</div>
	);
};

export default Home;
