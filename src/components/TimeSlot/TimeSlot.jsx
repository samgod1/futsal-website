import { useContext } from "react";
import toast from "react-hot-toast";

import "./TimeSlot.css";
import { PaymentContext } from "../../contexts/PaymentContext";

const TimeSlot = ({ time, selectedDate, dayName, available }) => {
	const { handlePaymentOpen } = useContext(PaymentContext);

	return (
		<button
			className={available ? "slot" : "slot unavailable"}
			onClick={() => {
				if (available) {
					handlePaymentOpen(dayName, time, selectedDate);
					toast("PLEASE COPY THE CREDENTIALS BEFORE CLICKING THE BUTTON");
				} else {
					toast("The slot seems to be already booked");
				}
			}}
		>
			{time}
		</button>
	);
};

export default TimeSlot;
