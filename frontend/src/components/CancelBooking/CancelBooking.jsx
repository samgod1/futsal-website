import { useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";

import "./CancelBooking.css";

const CancelBooking = () => {
	const { handleCancelBooking, setIsCancelBookingOpen, bookingId } =
		useContext(BookingContext);

	return (
		<div
			className="cancel-booking-background"
			onClick={() => {
				setIsCancelBookingOpen(false);
			}}
		>
			<div
				className="wrapper"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<p className="question">Are you sure?</p>
				<p className="note">Note: Please contact us for refund</p>
				<div className="buttons-container">
					<button
						onClick={() => {
							handleCancelBooking(bookingId);
							setIsCancelBookingOpen(false);
						}}
						className="yes"
					>
						Yes
					</button>
					<button
						onClick={() => {
							setIsCancelBookingOpen(false);
						}}
						className="no"
					>
						No
					</button>
				</div>
			</div>
		</div>
	);
};

export default CancelBooking;
