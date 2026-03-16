import mongoose from "mongoose";

let isConnected = false;

async function connectToDB() {
	if (isConnected) {
		console.log("Using existing DB connection");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGO_URI);
		isConnected = true;
		console.log("Connected to DB");
	} catch (e) {
		console.error("DB connection failed:", e);
		throw new Error("Database connection failed");
	}
}

export default connectToDB;
