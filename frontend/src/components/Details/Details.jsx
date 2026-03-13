import React, { useContext, useEffect, useState } from "react";
import { PaymentContext } from "../../contexts/PaymentContext";
import { ClipLoader } from "react-spinners";

import "./Details.css";

const Details = () => {
	const [loading, setLoading] = useState(false);
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
				{loading && (
					<div className="loading-container">
						<ClipLoader size={40} />
					</div>
				)}
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
						setLoading(true);
					}}
				>
					Pay via Esewa
				</button>
			</div>
		</div>
	);
};

export default Details;
