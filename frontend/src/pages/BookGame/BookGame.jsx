import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";

import "./BookGame.css";
import BookingCard from "../../components/BookingCard/BookingCard";
import MainLayout from "../../layouts/MainLayout";
import { UserContext } from "../../contexts/UserContext";

const BookGame = () => {
	const { user, loading } = useContext(UserContext);
	const navigate = useNavigate();

	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const bookings = [{ day: "Sun", ground: "A", time: "12:00AM" }];

	const bookingsMade = false;

	useEffect(() => {
		if (!loading && !user) {
			navigate("/signup");
			toast("You need to signup/signin first");
		}
	}, [loading]);

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
