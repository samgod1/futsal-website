import { useState, createContext, useEffect } from "react";
import {
	cancelBooking,
	getBookingsOfGeneratedDates,
	getUserBookings,
} from "../apis/booking";
import generateDates from "../utils/generateDates";

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
	const dates = generateDates();
	const [bookings, setBookings] = useState(null);
	//only contains already booked data upto 7days including today
	const [alreadyBooked, setAlreadyBooked] = useState([]);
	const [bookedTimes, setBookedTimes] = useState([]);

	async function handleGetUserBookings() {
		const userBookings = await getUserBookings();
		setBookings(userBookings);
	}

	async function handleCancelBooking(_id) {
		const success = await cancelBooking(_id);

		if (success) {
			const updatedBookings = bookings.filter((booking) => booking._id != _id);
			setBookings(updatedBookings);
			getBookingsOfGeneratedDates(dates).then((booked) => {
				console.log(booked);
				setAlreadyBooked(booked);
			});
		}
	}

	return (
		<BookingContext.Provider
			value={{
				bookings,
				setBookings,
				alreadyBooked,
				setAlreadyBooked,
				bookedTimes,
				setBookedTimes,
				handleGetUserBookings,
				handleCancelBooking,
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingProvider;
