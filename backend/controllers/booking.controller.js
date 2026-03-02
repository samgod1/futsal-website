import Booking from "../models/Booking.js";

export async function createBooking(userId, amount, transaction_uuid) {
	const booking = await Booking.create({
		userId: userId,
		day: "sun",
		date: "1234",
		time: "1234",
		price: amount,
		transaction_uuid: transaction_uuid,
	});
}
