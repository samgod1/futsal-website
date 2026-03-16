import React, { useContext, useEffect, useState } from "react";
import { PaymentContext } from "../../contexts/PaymentContext";
import { PulseLoader } from "react-spinners";

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
						<PulseLoader color="var(--c-dark)" size={20} />
					</div>
				)}
				<h1>Details</h1>
				<div className="g">
					<span className="title">Day:</span>{" "}
					<span className="value">{day}</span>
				</div>
				<div className="g">
					<span className="title">Time:</span>{" "}
					<span className="value">{time}</span>
				</div>
				<div className="g">
					<span className="title">Price:</span>{" "}
					<span className="value">{price}</span>
				</div>
				<div className="test-credentials">
					<h2>Test Credentials</h2>
					<div className="group">
						<div className="t">Id:</div>
						<div className="v">9806800003</div>
					</div>
					<div className="group">
						<div className="t">Mpin:</div>
						<div className="v">1122</div>
					</div>
					<div className="group">
						<div className="t">OTP:</div>
						<div className="v">123456</div>
					</div>
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
