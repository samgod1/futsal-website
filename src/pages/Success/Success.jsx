import { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IoMdArrowRoundBack } from "react-icons/io";

import { PaymentContext } from "../../contexts/PaymentContext";
import "./Success.css";

const Success = () => {
	const [searchParams] = useSearchParams();
	const { handleVerifyPaymentAndPaymentStatus } = useContext(PaymentContext);

	useEffect(() => {
		const base64 = searchParams.get("data");
		if (base64) {
			const standardBase64 = base64.replace("/-/g", "+").replace("/_/g", "/");

			const data = JSON.parse(atob(standardBase64));

			//Now I have to send that data to the backend to verify signature and confirm status of payment
			handleVerifyPaymentAndPaymentStatus(data);
		}
	}, []);

	return (
		<div className="success-page">
			<div className="wrapper">
				<div className="lottie">
					<DotLottieReact src="/images/Success.lottie" autoplay fit="fill" />
				</div>
				<div className="text">
					<span>Payment successful</span>
					<Link to={"/book-game"}>
						<IoMdArrowRoundBack />
						Go Back
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Success;
