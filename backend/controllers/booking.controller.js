import Booking from "../models/Booking.js";

export async function createBooking(
	userId,
	amount,
	transaction_uuid,
	day,
	time,
	date,
	code,
) {
	const booking = await Booking.create({
		userId: userId,
		day: day,
		date: date,
		time: time,
		price: amount,
		transaction_uuid: transaction_uuid,
		code: code,
	});

	return booking;
}

export async function getUserBookings(req, res) {
	try {
		const userId = req.user.userId;

		const bookings = await Booking.find({ userId: userId });

		if (!bookings) {
			return res.status(404).json({ message: "No bookings" });
		}

		return res.status(200).json(bookings);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: "Oops! something went wrong" });
	}
}
