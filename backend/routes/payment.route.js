import express from "express";
import {
	deletePendingPayment,
	initiatePayment,
	verifyPayment,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/initiate-payment", initiatePayment);
router.post("/verify-payment", verifyPayment);
router.post("/failure", deletePendingPayment);

export default router;
