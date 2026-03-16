export default function generateDates() {
	const dates = [];
	const date = new Date();
	const day = date.getDate();

	for (let i = 0; i < 7; i++) {
		date.setDate(day + i);
		dates.push(date.toISOString().split("T")[0]);
	}

	return dates;
}
