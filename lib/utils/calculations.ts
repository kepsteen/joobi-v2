import { getApplicationsCount, getUserVisits } from "./supabase/actions";

export async function calculateUserStreak() {
	const { userVisits, error } = await getUserVisits();

	if (error || !userVisits || userVisits.length === 0) {
		return 0;
	}

	const startDate = new Date(userVisits[0].start_of_current_streak);
	const endDate = new Date(userVisits[0].most_recent_visit);

	const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	return diffDays;
}

export async function calculateApplications() {
	const { count, error } = await getApplicationsCount();
	if (error || !count) {
		return 0;
	}
	return count;
}
