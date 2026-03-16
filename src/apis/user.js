import axios from "axios";

export async function getUserData() {
	try {
		const response = await axios.get("/api/user/", { withCredentials: true });
		return response.data;
	} catch (e) {
		console.log(e);
		return null;
	}
}
