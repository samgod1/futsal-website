import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import "./BookGame.css";
import MainLayout from "../../layouts/MainLayout";
import { UserContext } from "../../contexts/UserContext";
import Details from "../../components/Details/Details";
import { PaymentContext } from "../../contexts/PaymentContext";
import generateDates from "../../utils/generateDates";
import { BookingContext } from "../../contexts/BookingContext";
import BookedCard from "../../components/BookedCard/BookedCard";
import DateButton from "../../components/Date/DateButton";
import TimeSlot from "../../components/TimeSlot/TimeSlot";
import { getBookingsOfGeneratedDates } from "../../apis/booking";
import CancelBooking from "../../components/CancelBooking/CancelBooking";

const BookGame = () => {
	const dates = generateDates();
	const location = useLocation();

	const [selectedDate, setSelectedDate] = useState(dates[0]);
	const [dayName, setDayName] = useState(
		new Date(dates[0]).toLocaleDateString(undefined, { weekday: "short" }),
	);

	const { user, loading } = useContext(UserContext);
	const { isDetailsOpen } = useContext(PaymentContext);
	const {
		bookings,
		handleGetUserBookings,
		alreadyBooked,
		setAlreadyBooked,
		bookedTimes,
		setBookedTimes,
		isCancelBookingOpen,
	} = useContext(BookingContext);

	const navigate = useNavigate();

	const [timeSlots, setTimeSlots] = useState([
		"8:00AM - 9:00AM",
		"9:00AM - 10:00AM",
		"10:00AM - 11:00AM",
		"11:00AM - 12:00PM",
		"12:00PM - 1:00PM",
		"1:00PM - 2:00PM",
		"2:00PM - 3:00PM",
		"3:00PM - 4:00PM",
		"4:00PM - 5:00PM",
		"5:00PM - 6:00PM",
		"6:00PM - 7:00PM",
		"7:00PM - 8:00PM",
		"8:00PM - 9:00PM",
	]);

	useEffect(() => {
		setDayName(
			new Date(selectedDate).toLocaleDateString(undefined, {
				weekday: "short",
			}),
		);
	}, [selectedDate]);

	useEffect(() => {
		if (!alreadyBooked) {
			return;
		}

		const bookingsOfSelectedDate = alreadyBooked.filter(
			(booked) => booked.date == selectedDate,
		);

		setBookedTimes(bookingsOfSelectedDate.map((booking) => booking.time));
	}, [selectedDate, alreadyBooked]);

	useEffect(() => {
		if (!loading && !user) {
			navigate("/signup");
			toast("You need to signup/signin first");
		}
	}, [loading]);

	useEffect(() => {
		getBookingsOfGeneratedDates(dates).then((booked) => {
			const newBooking = location.state?.bookingData;
			if (newBooking) {
				const exists = booked.some((b) => b._id === newBooking._id);
				if (!exists) {
					setAlreadyBooked([...booked, newBooking]);
				} else {
					setAlreadyBooked(booked);
				}
			} else {
				setAlreadyBooked(booked);
			}
		});
		handleGetUserBookings();
	}, []);

	return (
		<MainLayout page={"book-game-page"}>
			<main className="book-game">
				{/* AVAILABE_BOOKINGS */}
				<section className="available-booking">
					{/* UPPER_SECTION */}
					<div className="dates-container">
						{dates.map((date) => (
							<DateButton
								date={date}
								selectedDate={selectedDate}
								setSelectedDate={setSelectedDate}
								key={date}
							/>
						))}
					</div>

					{/* LOWER_SECTION */}
					<div className="slots-container">
						{timeSlots.map((time) => (
							<TimeSlot
								time={time}
								selectedDate={selectedDate}
								dayName={dayName}
								available={!bookedTimes.includes(time)}
								key={time}
							/>
						))}
					</div>
				</section>

				{/* MY_BOOKINGS */}
				<section className="my-bookings">
					<h2>My Bookings</h2>
					<div className="line"></div>
					{!bookings || bookings.length == 0 ? (
						<div className="no-bookings">
							<div className="wrapper">No bookings made</div>
						</div>
					) : (
						<div className="booked-cards-wrapper">
							{bookings.map((booking) => (
								<BookedCard booking={booking} key={booking._id} />
							))}
						</div>
					)}
				</section>
				{isDetailsOpen && <Details />}
				{isCancelBookingOpen && <CancelBooking />}
			</main>
		</MainLayout>
	);
};

export default BookGame;
