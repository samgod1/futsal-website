import React from "react";

import "./BookedCard.css";

const BookedCard = ({ booking }) => {
	const { date, day, time } = booking;
	return (
		<div>
			<span>BookedCard</span>
			<span>{date}</span>
			<span>{day}</span>
			<span>{time}</span>
		</div>
	);
};

export default BookedCard;
