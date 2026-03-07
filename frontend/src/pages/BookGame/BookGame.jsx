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
	const { isPaymentOpen } = useContext(PaymentContext);
	const { bookings, handleGetUserBookings } = useContext(BookingContext);

	const navigate = useNavigate();

	const dates = generateDates();

	useEffect(() => {
		if (!loading && !user) {
			navigate("/signup");
			toast("You need to signup/signin first");
		}
	}, [loading]);

	useEffect(() => {
		handleGetUserBookings();
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
					{!bookings || bookings.length == 0 ? (
						<div className="no-bookings">
							<div className="wrapper">No bookings made</div>
						</div>
					) : (
						<div className="booked-cards-wrapper">
							{bookings.map((booking) => (
								<BookedCard booking={booking} />
							))}
						</div>
					)}
				</section>
				{isPaymentOpen && <Payment />}
			</main>
		</MainLayout>
	);
};

export default BookGame;
