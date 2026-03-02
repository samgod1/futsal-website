import axios from "axios";
import toast from "react-hot-toast";

export async function initiatePayment(amount) {
	try {
		const response = await axios.post("/api/payment/initiate-payment", {
			amount,
		});

		window.location.href = response.data.message;
	} catch (e) {
		console.log(e);
		toast.error(e?.response?.data?.message || e.message);
	}
}

export async function verifyPaymentAndPaymentStatus(data, price, day, time) {
	try {
		const response = await axios.post(
			"/api/payment/verify-payment",
			{
				...data,
			},
			{ withCredentials: true },
		);
	} catch (e) {
		console.log(e);
		toast.error(e?.response?.data?.message || e.message);
	}
}
