import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import "./BookGame.css";
import BookingCard from "../../components/BookingCard/BookingCard";
import MainLayout from "../../layouts/MainLayout";
import { UserContext } from "../../contexts/UserContext";

const BookGame = () => {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const bookings = [{ day: "Sun", ground: "A", time: "12:00AM" }];

	const bookingsMade = false;

	useEffect(() => {
		if (!user) {
			navigate("/signup");
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
			</main>
		</MainLayout>
	);
};

export default BookGame;
