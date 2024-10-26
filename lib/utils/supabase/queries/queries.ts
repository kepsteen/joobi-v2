import { UUID } from "crypto";
import { createClient } from "../server";
import { DateTime } from "luxon";

export async function getXpToLevel() {
	const supabase = createClient();
	const { data, error } = await supabase.from("xp_to_level").select();
	return { data, error };
}

export async function insertUserVisit(userId: UUID) {
	const supabase = createClient();
	const { data, error } = await supabase
		.from("user_visits")
		.insert({
			id: userId,
			start_of_current_streak: DateTime.local().toISO({ includeOffset: true }),
			most_recent_visit: DateTime.local().toISO({ includeOffset: true }),
		})
		.select();

	return { data, error };
}

export async function updateUserVisit(userId: UUID) {
	const supabase = createClient();
	const { data, error } = await supabase
		.from("user_visits")
		.update({
			most_recent_visit: DateTime.local().toISO({ includeOffset: true }),
		})
		.eq("id", userId)
		.select();
	return { data, error };
}
