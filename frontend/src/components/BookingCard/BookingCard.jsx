import React, { useContext, useEffect } from "react";
import "./BookingCard.css";
import { PaymentContext } from "../../contexts/PaymentContext";

const BookingCard = ({ date }) => {
	const time = [
		"8:00AM",
		"9:00AM",
		"10:00AM",
		"11:00AM",
		"12:00PM",
		"1:00PM",
		"2:00PM",
		"3:00PM",
		"4:00PM",
		"5:00PM",
		"6:00PM",
		"7:00PM",
		"8:00PM",
	];

	const { handlePaymentOpen } = useContext(PaymentContext);

	const day = new Date(date).toLocaleString(undefined, { weekday: "short" });

	return (
		<div className="card">
			<div className="day">{day}</div>
			<div className="available-times">
				{time.map((t) => (
					<button
						className="time"
						onClick={() => {
							handlePaymentOpen(day, t, date);
							console.log(day, t, date);
						}}
					>
						{t}
					</button>
				))}
			</div>
		</div>
	);
};

export default BookingCard;
