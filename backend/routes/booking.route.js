import express from "express";

import { getUserBookings } from "../controllers/booking.controller.js";

const router = express.Router();

router.get("/user", getUserBookings);

export default router;
