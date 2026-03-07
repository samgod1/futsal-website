import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import "./Failure.css";
import { handleFailure } from "../../apis/payment";

const Failure = () => {
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const transaction_uuid = searchParams.get("transaction_uuid");

		if (!transaction_uuid) {
			return;
		}

		handleFailure(transaction_uuid);
	}, []);

	return (
		<div className="failure-page">
			<div className="wrapper">
				<div className="lottie">
					<DotLottieReact src="/images/Failure.lottie" autoplay fit="fill" />
				</div>
				<div className="text">
					<span>Payment unsuccessful</span>
					<Link to={"/book-game"}>
						<IoMdArrowRoundBack />
						Go Back
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Failure;
