import { FaShower, FaShirt } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Map from "../../components/Map/Map";
import "./VisitUs.css";
import MainLayout from "../../layouts/MainLayout";

const VisitUs = () => {
	return (
		<MainLayout page={"visit-us-page"}>
			<main className="visit-us">
				<Map />
				<section className="available-facilities">
					<h2>Available Facilities</h2>
					<div className="facilities">
						<div className="facility">
							<h3>
								<FaShower />
								Shower
							</h3>
							<p>
								Hot water showers available for all players after every match.
							</p>
						</div>
						<div className="facility">
							<h3>
								<FaCarAlt />
								Parking
							</h3>
							<p>Free parking for bikes and cars right at the venue.</p>
						</div>
						<div className="facility">
							<h3>
								<FaShirt />
								Changing rooms
							</h3>
							<p>
								"Private changing rooms with secure lockers for your belongings.
							</p>
						</div>
					</div>
				</section>

				<section className="social-media">
					<h2>Follow Us:</h2>
					<div>
						<a href="https://www.facebook.com/KumariFutsal/" target="_blank">
							<img
								src="/images/facebook.svg"
								alt="facebook logo"
								width={50}
								height={50}
							/>
						</a>
						<a href="https://www.facebook.com/KumariFutsal/">
							<img
								src="/images/instagram.svg"
								alt="instagram logo"
								width={50}
								height={50}
							/>
						</a>
					</div>
				</section>
			</main>
		</MainLayout>
	);
};

export default VisitUs;
