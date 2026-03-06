import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	day: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	transaction_uuid: {
		type: String,
		required: true,
	},
	code: {
		type: Number,
		required: true,
	},
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
