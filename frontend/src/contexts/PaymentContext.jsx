import { createContext, useState, useEffect, useContext } from "react";

import {
	initiatePayment,
	verifyPaymentAndPaymentStatus,
} from "../apis/payment";
import { BookingContext } from "./BookingContext";

export const PaymentContext = createContext();

const PaymentProvider = ({ children }) => {
	const [isPaymentOpen, setIsPaymentOpen] = useState(false);
	const [day, setDay] = useState("null");
	const [time, setTime] = useState("null");
	const [date, setDate] = useState("null");
	const [price, setPrice] = useState("null");

	const { booking, setBooking } = useContext(BookingContext);

	function handlePaymentOpen(day, time, date) {
		if (day !== "Sat") {
			setPrice(1000);
		} else {
			setPrice(1500);
		}

		setIsPaymentOpen(true);
		setDay(day);
		setTime(time);
		setDate(date);
	}

	function handleInitiatePayment() {
		initiatePayment(price, day, time, date);
	}

	async function handleVerifyPaymentAndPaymentStatus(data) {
		const bookingData = await verifyPaymentAndPaymentStatus(data);

		if (!bookingData) {
			return;
		}

		navigate("/book-game");

		if (booking) {
			setBooking([...booking, bookingData]);
		} else {
			setBooking([bookingData]);
		}
	}

	return (
		<PaymentContext.Provider
			value={{
				isPaymentOpen,
				day,
				time,
				price,
				handlePaymentOpen,
				handleInitiatePayment,
				handleVerifyPaymentAndPaymentStatus,
				setIsPaymentOpen,
			}}
		>
			{children}
		</PaymentContext.Provider>
	);
};

export default PaymentProvider;
