import { useContext } from "react";

import "./TimeSlot.css";
import { PaymentContext } from "../../contexts/PaymentContext";

const TimeSlot = ({ time, selectedDate, dayName }) => {
	const { handlePaymentOpen } = useContext(PaymentContext);

	return (
		<button
			className="slot"
			onClick={() => {
				handlePaymentOpen(dayName, time, selectedDate);
			}}
		>
			{time}
		</button>
	);
};

export default TimeSlot;
