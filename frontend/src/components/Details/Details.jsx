import React, { useContext, useEffect } from "react";
import { PaymentContext } from "../../contexts/PaymentContext";

import "./Details.css";

const Details = () => {
	const { day, time, price, handleInitiatePayment, setIsDetailsOpen } =
		useContext(PaymentContext);

	return (
		<div className="background" onClick={() => setIsDetailsOpen(false)}>
			<div
				className="wrapper"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<h1>Details</h1>
				<div>
					<span className="title">Day:</span>{" "}
					<span className="value">{day}</span>
				</div>
				<div>
					<span className="title">Time:</span>{" "}
					<span className="value">{time}</span>
				</div>
				<div>
					<span className="title">Price:</span>{" "}
					<span className="value">{price}</span>
				</div>
				<button
					onClick={(e) => {
						e.stopPropagation;
						handleInitiatePayment();
					}}
				>
					Pay via Esewa
				</button>
			</div>
		</div>
	);
};

export default Details;
