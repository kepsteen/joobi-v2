"use server";
import { UUID } from "crypto";
import { createClient } from "./server";
import { DateTime } from "luxon";

export async function getXpToLevel() {
	const supabase = createClient();
	const { data, error } = await supabase.from("xp_to_level").select();
	if (error) throw error;
	return { data };
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
	if (error) throw error;
	return { data };
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
	if (error) throw error;
	return { data };
}

export async function getUserVisit(userId: UUID) {
	const supabase = createClient();
	const { data: userVisit, error } = await supabase
		.from("user_visits")
		.select()
		.eq("id", userId);
	if (error) throw error;
	return { userVisit };
}

export async function getUserVisits() {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data: userVisits, error } = await supabase
		.from("user_visits")
		.select()
		.eq("id", user?.id);
	if (error) throw error;
	return { userVisits };
}

export async function getApplicationsCount() {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	const { count, error } = await supabase
		.from("applications")
		.select("*", { count: "exact", head: true })
		.eq("user_id", user?.id);
	if (error) throw error;
	return { count };
}

export async function getUserXP() {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	const { data: xp, error } = await supabase
		.from("user_xp_totals")
		.select("total_xp")
		.eq("user_id", user?.id);
	if (error) throw error;
	return { xp };
}

export async function getUserLevel(xp: number) {
	const supabase = createClient();
	const { data: level, error } = await supabase
		.from("xp_to_level")
		.select("*")
		.gt("max_xp", xp)
		.lt("min_xp", xp);
	return { level, error };
}
