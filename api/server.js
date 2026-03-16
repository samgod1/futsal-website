import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "../backend/routes/auth.route.js";
import userRoutes from "../backend/routes/user.route.js";
import paymentRoutes from "../backend/routes/payment.route.js";
import bookingRoutes from "../backend/routes/booking.route.js";
import connectToDB from "../backend/config/database.js";
import protectRoute from "../backend/middlewares/protectRoute.js";

config();

const app = express();
const __dirname = path.resolve();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", protectRoute, userRoutes);
app.use("/api/payment", protectRoute, paymentRoutes);
app.use("/api/booking", protectRoute, bookingRoutes);

// for production merge frontend and backend
// app.use(express.static(path.join(__dirname, "../frontend/dist")));

// if (process.env.PRODUCTION === "true") {
// 	app.use("/{*any}", (req, res) => {
// 		res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
// 	});
// }

if (process.env.PRODUCTION == "false") {
	app.listen(PORT, () => {
		console.log("App is listening to port: " + PORT);
		connectToDB();
	});
}

// connectToDB();

// export default app;
