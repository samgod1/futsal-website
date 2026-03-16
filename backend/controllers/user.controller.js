import User from "../models/User.js";

export async function getUserData(req, res) {
	try {
		const userId = req.user.userId;

		const user = await User.findById(userId).select("-password");

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json(user);
	} catch (e) {
		console.log("getUserData error: " + e);
		return res.status(500).json({ message: "Oops! Something went wrong" });
	}
}
