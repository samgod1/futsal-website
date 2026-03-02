import { createContext, useState } from "react";
import {
	initiatePayment,
	verifyPaymentAndPaymentStatus,
} from "../apis/payment";

export const PaymentContext = createContext();

const PaymentProvider = ({ children }) => {
	const [isPaymentOpen, setIsPaymentOpen] = useState(false);
	const [day, setDay] = useState("null");
	const [time, setTime] = useState("null");
	const [price, setPrice] = useState("null");

	function handlePaymentOpen(day, time) {
		if (day !== "Sat") {
			setPrice(1000);
		} else {
			setPrice(1500);
		}

		setIsPaymentOpen(true);
		setDay(day);
		setTime(time);
	}

	function handleInitiatePayment() {
		initiatePayment(price);
	}

	function handleVerifyPaymentAndPaymentStatus(data) {
		verifyPaymentAndPaymentStatus(data, price, day, time);
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
				setIsPaymentOpen,
			}}
		>
			{children}
		</PaymentContext.Provider>
	);
};

export default PaymentProvider;
