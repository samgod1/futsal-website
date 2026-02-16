import "./BookGame.css";
import BookingCard from "../../components/BookingCard/BookingCard";
import Navbar from "../../components/Navbar/Navbar";

const BookGame = () => {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const bookings = [{ day: "Sun", ground: "A", time: "12:00AM" }];

	const bookingsMade = false;

	return (
		<div className="page">
			<Navbar />
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
			</main>
		</div>
	);
};

export default BookGame;
