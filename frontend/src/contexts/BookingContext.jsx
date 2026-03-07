import { useState, createContext, useEffect } from "react";
import { getUserBookings } from "../apis/booking";

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
	const [bookings, setBookings] = useState(null);

	async function handleGetUserBookings() {
		const userBookings = await getUserBookings();
		setBookings(userBookings);
	}

	return (
		<BookingContext.Provider
			value={{ bookings, setBookings, handleGetUserBookings }}
		>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingProvider;
