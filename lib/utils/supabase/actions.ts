/* eslint-disable no-console */
"use server";
import { UUID } from "crypto";
import { createClient } from "./server";
import { DateTime } from "luxon";
import { PostgrestError } from "@supabase/supabase-js";

interface DatabaseResponse<T> {
	data: T | null;
	error: PostgrestError | null;
}

export async function insertUserVisit(
	userId: UUID
): Promise<DatabaseResponse<unknown>> {
	try {
		const supabase = createClient();
		const { data, error } = await supabase
			.from("user_visits")
			.insert({
				id: userId,
				start_of_current_streak: DateTime.local().toISO({
					includeOffset: true,
				}),
				most_recent_visit: DateTime.local().toISO({ includeOffset: true }),
			})
			.select();

		return { data, error };
	} catch (error) {
		return { data: null, error: error as PostgrestError };
	}
}

export async function updateUserVisit(
	userId: UUID
): Promise<DatabaseResponse<unknown>> {
	try {
		const supabase = createClient();
		const { data, error } = await supabase
			.from("user_visits")
			.update({
				most_recent_visit: DateTime.local().toISO({ includeOffset: true }),
			})
			.eq("id", userId)
			.select();

		return { data, error };
	} catch (error) {
		return { data: null, error: error as PostgrestError };
	}
}

export async function getUserVisit(userId: UUID) {
	try {
		const supabase = createClient();
		const { data: userVisit, error } = await supabase
			.from("user_visits")
			.select()
			.eq("id", userId);

		if (error) console.error("Supabase Error: ", error);

		return { userVisit };
	} catch (error) {
		console.error("Unexpected Error: ", error);
	}
}

export async function getUserVisits() {
	try {
		const supabase = createClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();

		const { data: userVisits, error } = await supabase
			.from("user_visits")
			.select()
			.eq("id", user?.id as string);

		if (error) console.error("Supabase Error: ", error);

		return { userVisits };
	} catch (error) {
		console.error("Unexpected Error: ", error);
	}
}

export async function getApplicationsCount() {
	try {
		const supabase = createClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();
		const { count, error } = await supabase
			.from("applications")
			.select("*", { count: "exact", head: true })
			.eq("user_id", user?.id as string);

		if (error) console.error("Supabase Error: ", error);

		return { count };
	} catch (error) {
		console.error("Unexpected Error: ", error);
	}
}

export async function getUserXP() {
	try {
		const supabase = createClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();
		const { data: xp, error } = await supabase
			.from("user_xp_totals")
			.select("total_xp")
			.eq("user_id", user?.id as string);

		if (error) console.error("Supabase Error: ", error);
		return { xp };
	} catch (error) {
		console.error("Unexpected Error: ", error);
	}
}

export async function getUserLevel(xp: number) {
	try {
		const supabase = createClient();
		const { data: level, error } = await supabase
			.from("xp_to_level")
			.select("*")
			.gt("max_xp", xp)
			.lt("min_xp", xp);

		if (error) console.error("Supabase Error: ", error);

		return { level };
	} catch (error) {
		console.error("Unexpected Error: ", error);
	}
}
