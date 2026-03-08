import { useContext } from "react";

import "./TimeSlot.css";
import { PaymentContext } from "../../contexts/PaymentContext";

const TimeSlot = ({ time, selectedDate, dayName, available }) => {
	const { handlePaymentOpen } = useContext(PaymentContext);

	return (
		<button
			className={available ? "slot" : "slot unavailable"}
			onClick={() => {
				handlePaymentOpen(dayName, time, selectedDate);
			}}
		>
			{time}
		</button>
	);
};

export default TimeSlot;
