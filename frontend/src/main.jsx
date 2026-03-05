import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserProvider from "./contexts/UserContext.jsx";
import PaymentProvider from "./contexts/PaymentContext.jsx";
import BookingProvider from "./contexts/BookingContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BookingProvider>
			<PaymentProvider>
				<UserProvider>
					<App />
				</UserProvider>
			</PaymentProvider>
		</BookingProvider>
	</StrictMode>,
);
