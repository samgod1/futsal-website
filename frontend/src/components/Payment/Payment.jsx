import React, { useContext, useEffect } from "react";
import { PaymentContext } from "../../contexts/PaymentContext";

import "./Payment.css";

const Payment = () => {
	const { day, time, price, handleInitiatePayment, setIsPaymentOpen } =
		useContext(PaymentContext);

	return (
		<div className="background" onClick={() => setIsPaymentOpen(false)}>
			<div
				className="wrapper"
				onClick={(e) => {
					e.stopPropagation();
					handleInitiatePayment();
				}}
			>
				<h1>Payment</h1>
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
				<button>Pay via Esewa</button>
			</div>
		</div>
	);
};

export default Payment;
