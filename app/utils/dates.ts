export function formatDuration(start: Date, end?: Date | undefined): string {
	if (!end) {
		end = new Date();
	}
	const totalMonths =
		(end.getFullYear() - start.getFullYear()) * 12 +
		(end.getMonth() - start.getMonth());
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	let duration = '';
	if (years > 0) {
		duration += `${years} year${years > 1 ? 's' : ''}`;
	}
	if (months > 0) {
		if (years > 0) {
			duration += ' ';
		}
		duration += `${months} month${months > 1 ? 's' : ''}`;
	}
	return duration;
}

export function asShortDate(date: Date): string {
	const month = date.toLocaleString('en-US', { month: 'long' });
	const year = date.getFullYear();
	return `${month} ${year}`;
}
