import axios from "axios";
import toast from "react-hot-toast";

export async function getUserBookings() {
	try {
		const response = await axios.get(
			import.meta.env.VITE_BACKEND_URL + "/api/booking/user",
			{
				withCredentials: true,
			},
		);

		return response.data;
	} catch (e) {
		console.log(e);
	}
}

export async function getBookingsOfGeneratedDates(dates) {
	try {
		const response = await axios.post(
			import.meta.env.VITE_BACKEND_URL + "api/booking/seven-days",
			{ dates: dates },
			{
				withCredentials: true,
			},
		);

		return response.data.booked;
	} catch (e) {
		console.log(e);
		if (!e?.response?.status) {
			toast.error(e?.response?.data?.message || e.message);
		}
	}
}

export async function cancelBooking(_id) {
	try {
		const response = await axios.delete(
			import.meta.env.VITE_BACKEND_URL + `/api/booking/delete/${_id}`,
		);
		toast.success(response.data.message);
		return true;
	} catch (e) {
		console.log(e);
		toast.error(e?.response?.data?.message || e.message);
		return false;
	}
}
