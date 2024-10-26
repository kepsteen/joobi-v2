import {
	insertUserVisit,
	updateUserVisit,
} from "@/lib/utils/supabase/queries/queries";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const webhookSecret = request.headers.get("x-webhook-secret");

	if (!webhookSecret || webhookSecret !== process.env.SUPABASE_WEBHOOK_SECRET) {
		return new Response(JSON.stringify({ error: "Unauthorized" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}

	const { record } = await request.json();
	const userId = record?.id;

	const { error: insertError } = await insertUserVisit(userId);
	if (insertError) {
		const { error: updateError } = await updateUserVisit(userId);
		if (updateError) {
			return new Response(JSON.stringify({ error: updateError.message }), {
				status: 500,
				headers: { "Content-Type": "application/json" },
			});
		}
	}
	// Todo: Add logic to reset the start_of_current_streak if the most_recent_visit is greater than

	return new Response(
		JSON.stringify({ message: "User visit recorded successfully" }),
		{
			status: 200,
			headers: { "Content-Type": "application/json" },
		}
	);
}
