import { getApplicationsCount, getUserVisits } from "./supabase/actions";

export async function calculateUserStreak() {
	const result = await getUserVisits();
	if (!result?.userVisits || result.userVisits.length === 0) {
		return 0;
	}

	const startDate = new Date(
		result.userVisits[0].start_of_current_streak ?? new Date()
	);
	const endDate = new Date(
		result.userVisits[0].most_recent_visit ?? new Date()
	);

	const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	return diffDays;
}

export async function calculateApplications() {
	const result = await getApplicationsCount();
	if (!result?.count) {
		return 0;
	}
	return result.count;
}
