import express from "express";
import {
	initiatePayment,
	verifyPayment,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/initiate-payment", initiatePayment);
router.post("/verify-payment", verifyPayment);

export default router;
