import express from "express";

import {
	getBookingsOfSevenDays,
	getUserBookings,
} from "../controllers/booking.controller.js";

const router = express.Router();

router.get("/user", getUserBookings);
router.post("/seven-days", getBookingsOfSevenDays);

export default router;
