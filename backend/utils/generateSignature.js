import crypto from "crypto";

export default function generateHmacSha256Hash(data, secret) {
	const hash = crypto
		.createHmac("sha256", secret)
		.update(data)
		.digest("base64");

	return hash;
}
