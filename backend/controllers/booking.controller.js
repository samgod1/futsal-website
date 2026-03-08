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

		const bookings = await Booking.find({ userId: userId }).select(
			"-transaction_uuid -_id -userId",
		);

		if (!bookings) {
			return res.status(404).json({ message: "No bookings" });
		}

		return res.status(200).json(bookings);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: "Oops! something went wrong" });
	}
}

export async function getBookingsOfSevenDays(req, res) {
	try {
		const dates = req.body.dates;

		const booked = await Booking.find({
			date: { $in: dates },
		}).select("-transaction_uuid -code -userId -price -day");

		//Remove the unnecessary data from bookings probably date and time are only needed
		//Check if the selected date timeSlots includes with the data sent and then make them unavailable

		return res.status(200).json({ booked: booked });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: "Oops! something went wrong" });
	}
}
