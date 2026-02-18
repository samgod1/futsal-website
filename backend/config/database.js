import mongoose from "mongoose";

async function connectToDB() {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Connected to DB");
	} catch (e) {
		console.log(e);
		process.exit(1);
	}
}

export default connectToDB;
