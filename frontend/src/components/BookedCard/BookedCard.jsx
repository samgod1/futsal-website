import React, { useContext, useState } from "react";
import { MdDateRange, MdAccessTimeFilled } from "react-icons/md";

import "./BookedCard.css";
import { BookingContext } from "../../contexts/BookingContext";

const BookedCard = ({ booking }) => {
	const { _id, date, day, time, code } = booking;

	const [isCodeVisible, setIsCodeVisible] = useState(false);

	const { handleCancelBooking } = useContext(BookingContext);

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
				<button
					className="cancel-booking"
					onClick={() => {
						handleCancelBooking(_id);
					}}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default BookedCard;
