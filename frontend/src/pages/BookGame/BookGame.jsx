import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";

import "./BookGame.css";
import BookingCard from "../../components/BookingCard/BookingCard";
import MainLayout from "../../layouts/MainLayout";
import { UserContext } from "../../contexts/UserContext";
import Payment from "../../components/Payment/Payment";
import { PaymentContext } from "../../contexts/PaymentContext";

const BookGame = () => {
	const { user, loading } = useContext(UserContext);
	const { isPaymentOpen, handleVerifyPaymentAndPaymentStatus } =
		useContext(PaymentContext);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams("data");

	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const bookings = [{ day: "Sun", time: "12:00AM" }];

	const bookingsMade = false;

	useEffect(() => {
		if (!loading && !user) {
			navigate("/signup");
			toast("You need to signup/signin first");
		}
	}, [loading]);

	useEffect(() => {
		const base64 = searchParams.get("data");
		if (base64) {
			const standardBase64 = base64.replace("/-/g", "+").replace("/_/g", "/");

			const data = JSON.parse(atob(standardBase64));

			//Now I have to send that data to the backend to verify signature and confirm status of payment
			handleVerifyPaymentAndPaymentStatus(data);
		}
	}, []);

	return (
		<MainLayout page={"book-game-page"}>
			<main className="book-game">
				<section className="available-booking">
					<h2>Available Bookings</h2>
					<div className="cards-container">
						{days.map((day) => (
							<BookingCard key={day} day={day} />
						))}
					</div>
				</section>
				<section className="my-bookings">
					<h2>My Bookings</h2>
					{bookingsMade ? (
						<div></div>
					) : (
						<div className="no-bookings">
							<div className="wrapper">No bookings made</div>
						</div>
					)}
				</section>
				{isPaymentOpen && <Payment />}
			</main>
		</MainLayout>
	);
};

export default BookGame;
