import express from "express";
import { getAvailableDays } from "../controllers/availableDays.controller";

const router = express.Router();

router.get("/", getAvailableDays);

export default router;
