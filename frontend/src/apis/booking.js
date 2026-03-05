import axios from "axios";

export async function getUserBookings() {
	try {
		const response = await axios.get("/api/booking/user", {
			withCredentials: true,
		});

		return response.data;
	} catch (e) {
		console.log(e);
	}
}
