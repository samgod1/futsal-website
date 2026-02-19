import axios from "axios";
import { toast } from "react-hot-toast";

export async function signup(formData) {
	try {
		const response = await axios.post("/api/auth/signup", formData);
		toast.success("Signup successful");
		return response.data;
	} catch (e) {
		console.log(e);
		toast.error(e?.response?.data?.message || e.message);
		return null;
	}
}

export async function signin(formData) {
	try {
		const response = await axios.post("/api/auth/signin", formData);
		toast.success("Signin successful");
		return response.data;
	} catch (e) {
		console.log(e);
		toast.error(e?.response?.data?.message || e.message);
		return null;
	}
}
