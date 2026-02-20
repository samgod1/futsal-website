import axios from "axios";
import toast from "react-hot-toast";

export async function getUserData() {
	try {
		const response = await axios.get("/api/user/", { withCredentials: true });

		console.log(response.data);
		return response.data;
	} catch (e) {
		const status = e?.response?.status;

		if (status === 400 || status === 401) {
			return null;
		}

		console.log(e);
		toast.error(e?.response?.data?.message || e.message);

		return null;
	}
}
