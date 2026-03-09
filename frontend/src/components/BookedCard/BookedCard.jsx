import React, { useState } from "react";
import { FaKey } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { MdDateRange, MdAccessTimeFilled } from "react-icons/md";

import "./BookedCard.css";

const BookedCard = ({ booking }) => {
	const { date, day, time, code } = booking;

	const [isCodeVisible, setIsCodeVisible] = useState(false);

	return (
		<div className="booked-card">
			<div className="wrapper">
				<p className="booked-date">
					<MdDateRange />
					{day}, {date}
				</p>
				<p className="booked-time">
					<MdAccessTimeFilled className="booked-time-icon" />
					{time.split(" ")[0]}
				</p>
			</div>
			<div className="booking-code">
				<p className="title">Code</p>
				<div className="code" onClick={() => setIsCodeVisible(!isCodeVisible)}>
					{isCodeVisible ? code : `•••••`}
				</div>
				<p className="info">Tap to {isCodeVisible ? "hide" : "reveal"}</p>
				<button className="cancel-booking">Cancel</button>
			</div>
		</div>
	);
};

export default BookedCard;
