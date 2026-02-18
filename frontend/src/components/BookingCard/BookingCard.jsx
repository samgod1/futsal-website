import React from "react";
import "./BookingCard.css";

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

	return (
		<div className="card">
			<div className="day">{day}</div>
			<div className="available-times">
				{time.map((t) => (
					<button className="time">{t}</button>
				))}
			</div>
		</div>
	);
};

export default BookingCard;
