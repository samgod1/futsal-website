import jwt from "jsonwebtoken";

function generateToken(res, userId) {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});

	res.cookie("token", token, {
		httpOnly: true,
		secure: process.env.PRODUCTION,
		sameSite: process.env.PRODUCTION ? "strict" : "none",
		maxAge: 30 * 24 * 60 * 60 * 1000,
	});

	return token;
}

export default generateToken;
