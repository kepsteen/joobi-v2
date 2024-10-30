import { getApplicationsCount, getUserVisits } from "../supabase/queries";
import { Stats } from "@/lib/types/types";

export async function calculateUserStreak() {
	const { data, error } = await getUserVisits();

	if (error || !data || data.length === 0) {
		return 0;
	}

	const startDate = new Date(data[0].start_of_current_streak);
	const endDate = new Date(data[0].most_recent_visit);

	// Calculate difference in days
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

export async function getStats(): Promise<Stats> {
	const [streak, applications] = await Promise.all([
		calculateUserStreak(),
		calculateApplications(),
	]);
	return { streak, applications };
}
