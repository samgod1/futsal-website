import { useEffect, useRef, useState } from "react";
import "./DateButton.css";

const DateButton = ({ date, selectedDate, setSelectedDate }) => {
	const [day, setDay] = useState(null);
	const [dayName, setDayName] = useState(null);

	function handleClick() {
		setSelectedDate(date);
	}

	useEffect(() => {
		const d = new Date(date);
		setDay(d.getDate());
		setDayName(d.toLocaleDateString(undefined, { weekday: "short" }));
	}, []);

	return (
		<button
			className={selectedDate == date ? "selected-date date" : "date"}
			onClick={handleClick}
		>
			<div className="text">
				<span className="day">{day}</span>
				<span className="dayName">{dayName}</span>
			</div>
		</button>
	);
};

export default DateButton;
