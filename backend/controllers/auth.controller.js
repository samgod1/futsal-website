import bcrypt from "bcrypt";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export async function signup(req, res) {
	try {
		const { username, email, password, confirmPassword } = req.body;

		if (!username || !email || !password || !confirmPassword) {
			return res.status(400).json({ message: "All fields are required" });
		}

		//USERNAME
		if (username.length < 3) {
			return res
				.status(400)
				.json({ message: "Username length should be 3 or more characters" });
		}

		if (username.includes(" ")) {
			return res
				.status(400)
				.json({ message: "Username must not contain any space" });
		}

		//EMAIL
		if (!email.includes("@")) {
			return res.status(400).json({ message: "Invalid email" });
		}

		//PASSWORD
		if (password !== confirmPassword) {
			return res.status(400).json({ message: "Passwords don't match" });
		}

		if (password.length < 6) {
			return res
				.status(400)
				.json({ message: "Password should be 6 or more characters" });
		}

		if (password.includes(" ")) {
			return res
				.status(400)
				.json({ message: "Password must not contain any space" });
		}

		//USER
		const user = await User.findOne({ email: email });

		if (user) {
			return res.status(400).json({ message: "User already exists" });
		}

		const genSalt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, genSalt);

		const newUser = await User.create({
			username: username,
			email: email,
			password: hashedPassword,
		});

		if (!newUser) {
			return res.status(500).json({ message: "Couldn't create user" });
		}

		generateToken(res, newUser._id);

		return res.status(201).json({
			userId: newUser._id,
			username: newUser.username,
			email: newUser.email,
		});
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: "Oops! something went wrong" });
	}
}

export async function signin(req, res) {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const user = await User.findOne({ email: email });

		if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const isCorrect = await bcrypt.compare(password, user.password);

		if (!isCorrect) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		generateToken(res, user._id);

		return res
			.status(200)
			.json({ userId: user._id, email: user.email, username: user.username });
	} catch (e) {
		console.log(e);
		return res.status(500).json("Oops! something went wrong");
	}
}

export async function logout(req, res) {
	try {
		res.cookie("token", "", {
			httpOnly: true,
			secure: process.env.PRODUCTION === "true",
			sameSite: process.env.PRODUCTION === "true" ? "strict" : "none",
			maxAge: 0,
		});

		return res.status(200).json({ message: "Logout Successful" });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: "Oops! something went wrong" });
	}
}
