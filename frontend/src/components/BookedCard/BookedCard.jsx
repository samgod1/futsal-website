import React from "react";
import { FaKey } from "react-icons/fa";
import { MdDateRange, MdAccessTimeFilled } from "react-icons/md";

import "./BookedCard.css";

const BookedCard = ({ booking }) => {
	const { date, day, time } = booking;

	return (
		<div className="booked-card">
			<h3>
				<MdAccessTimeFilled />
				{time}
			</h3>
			<span>
				<MdDateRange />
				{date}, {day}
			</span>
			<span>
				<FaKey />
				Token:
			</span>
		</div>
	);
};

export default BookedCard;
