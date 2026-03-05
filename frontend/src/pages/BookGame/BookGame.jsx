import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";

import "./BookGame.css";
import BookingCard from "../../components/BookingCard/BookingCard";
import MainLayout from "../../layouts/MainLayout";
import { UserContext } from "../../contexts/UserContext";
import Payment from "../../components/Payment/Payment";
import { PaymentContext } from "../../contexts/PaymentContext";
import generateDates from "../../utils/generateDates";
import { BookingContext } from "../../contexts/BookingContext";
import BookedCard from "../../components/BookedCard/BookedCard";

const BookGame = () => {
	const { user, loading } = useContext(UserContext);
	const { isPaymentOpen, handleVerifyPaymentAndPaymentStatus } =
		useContext(PaymentContext);
	const { bookings } = useContext(BookingContext);

	const navigate = useNavigate();
	const [searchParams] = useSearchParams("data");

	const dates = generateDates();

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
						{dates.map((date) => (
							<BookingCard key={date} date={date} />
						))}
					</div>
				</section>
				<section className="my-bookings">
					<h2>My Bookings</h2>
					{bookings ? (
						bookings.map((booking) => <BookedCard />)
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
