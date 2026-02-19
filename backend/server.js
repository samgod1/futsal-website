import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import connectToDB from "./config/database.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
	res.send("hello world");
});
app.use("/api/auth", authRoutes);
//for production merge frontend and backend
//app.use(express.static(path.join(dirname, ../frontend/dist)))
// if (process.env.PRODUCTION) {
// 	app.use("*/{any}", {
//		res.sendFile(path.join(dirname, ../frontend/dist/index.html))
//})
// }

app.listen(PORT, () => {
	console.log("App is listening to port: " + PORT);
	connectToDB();
});
