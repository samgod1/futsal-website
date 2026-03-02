import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import generateHmacSha256Hash from "../utils/generateSignature.js";
import { createBooking } from "./booking.controller.js";

export async function initiatePayment(req, res) {
	try {
		let { amount } = req.body;

		amount = amount.toFixed(1);

		let paymentData = {
			amount,
			failure_url: process.env.FAILURE_URL,
			product_delivery_charge: "0",
			product_service_charge: "0",
			product_code: process.env.MERCHANT_ID,
			signed_field_names: "total_amount,transaction_uuid,product_code",
			success_url: process.env.SUCCESS_URL,
			tax_amount: "0",
			total_amount: amount,
			transaction_uuid: uuidv4(),
		};

		const data = `total_amount=${paymentData.total_amount},transaction_uuid=${paymentData.transaction_uuid},product_code=${paymentData.product_code}`;

		const signature = generateHmacSha256Hash(data, process.env.ESEWA_SECRET);

		paymentData = { ...paymentData, signature };

		const payment = await axios.post(
			"https://rc-epay.esewa.com.np/api/epay/main/v2/form",
			null,
			{
				params: paymentData,
			},
		);

		return res.status(200).json({ message: payment.request.res.responseUrl });
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: "Oops! something went wrong" });
	}
}

export async function verifyPayment(req, res) {
	try {
		const decodedData = req.body;
		const { userId } = req.user;

		const data = decodedData.signed_field_names
			.split(",")
			.map((field) => `${field}=${decodedData[field]}`)
			.join(",");

		const expectedSignature = generateHmacSha256Hash(
			data,
			process.env.ESEWA_SECRET,
		);

		if (decodedData.signature !== expectedSignature) {
			return res.status(400).json({ message: "Invalid signature" });
		}

		//Checking the status of the payment
		const response = await axios.get(
			`https://rc.esewa.com.np/api/epay/transaction/status/?product_code=${decodedData.product_code}&total_amount=${decodedData.total_amount}&transaction_uuid=${decodedData.transaction_uuid}`,
		);

		if (!response.data) {
			return res.status(400).json({ message: "No payment found" });
		}

		if (response.data.status !== "COMPLETE") {
			return res.status(400).json({ message: "Payment status not complete" });
		}

		createBooking(userId, decodedData.amount, decodedData.transaction_uuid);

		return res.status(200).json("Payment successful");
	} catch (e) {
		console.log(e);
		return res.status(500).json("Oops! something went wrong");
	}
}
