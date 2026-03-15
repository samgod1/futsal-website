import axios from "axios";

export async function getUserData() {
	try {
		const response = await axios.get(
			import.meta.env.VITE_BACKEND_URL + "/api/user/",
			{ withCredentials: true },
		);
		return response.data;
	} catch (e) {
		console.log(e);
		return null;
	}
}
