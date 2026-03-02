import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	day: {
		type: String,
	},
	date: {
		type: String,
	},
	time: {
		type: String,
	},
	price: {
		type: Number,
	},
	transaction_uuid: {
		type: String,
	},
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
