import axios from "axios";
import { toast } from "react-hot-toast";

export async function signup(formData) {
	try {
		const response = await axios.post("/api/auth/signup", formData);

		return response.data;
	} catch (e) {
		console.log(e);
		toast.error(e?.response?.data?.message || e.message);
	}
}
