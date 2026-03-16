import mongoose from "mongoose";

const pendingPaymentSchema = mongoose.Schema({
	transaction_uuid: {
		type: String,
		required: true,
	},
	day: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
});

const PendingPayment = mongoose.model("PendingPayment", pendingPaymentSchema);

export default PendingPayment;
