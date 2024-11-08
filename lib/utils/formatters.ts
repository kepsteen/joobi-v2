import { DateTime } from "luxon";

export function formatToDollars(amount: string): string {
	const numberAmount = parseFloat(amount);
	if (isNaN(numberAmount)) {
		return "$0";
	}

	if (numberAmount >= 1000) {
		return `$${(numberAmount / 1000).toFixed(0)}K`;
	}

	return `$${numberAmount.toFixed(0)}`;
}

export function formatDate(date: string | null) {
	if (!date) return null;
	return DateTime.fromISO(date).toFormat("MM/dd/yy");
}
