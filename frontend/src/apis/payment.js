import axios from "axios";
import toast from "react-hot-toast";

export async function initiatePayment(amount, day, time, date) {
	try {
		const response = await axios.post("/api/payment/initiate-payment", {
			amount,
			day,
			time,
			date,
		});

		window.location.href = response.data.message;
	} catch (e) {
		console.log(e);
		toast.error(e?.response?.data?.message || e.message);
	}
}

export async function verifyPaymentAndPaymentStatus(data) {
	try {
		const response = await axios.post(
			"/api/payment/verify-payment",
			{
				decodedData: data,
			},
			{ withCredentials: true },
		);

		console.log(response.data);
		//Here I have to use BookingContext to use response data in setBooking
		return response.data;
	} catch (e) {
		console.log(e);
		toast.error(e?.response?.data?.message || e.message);
		return null;
	}
}

export async function handleFailure(transaction_uuid) {
	try {
		await axios.post(
			"api/payment/failure",
			{
				transaction_uuid: transaction_uuid,
			},
			{ withCredentials: true },
		);
	} catch (e) {
		console.log(e);
		toast.error(e?.response?.data?.message || e.message);
	}
}
