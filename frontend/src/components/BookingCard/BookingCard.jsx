import React, { useContext } from "react";
import "./BookingCard.css";
import { PaymentContext } from "../../contexts/PaymentContext";

const BookingCard = ({ day }) => {
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

	return (
		<div className="card">
			<div className="day">{day}</div>
			<div className="available-times">
				{time.map((t) => (
					<button className="time" onClick={() => handlePaymentOpen(day, t)}>
						{t}
					</button>
				))}
			</div>
		</div>
	);
};

export default BookingCard;
