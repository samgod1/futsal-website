import jwt from "jsonwebtoken";

async function protectRoute(req, res, next) {
	const token = req.cookies.token;

	if (!token) {
		return res.status(401).json({ message: "No token provided" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decoded;
		next();
	} catch (e) {
		console.log(e);
		return res.status(401).json({ message: "Unauthorized user" });
	}
}

export default protectRoute;
