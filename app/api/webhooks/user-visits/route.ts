import { insertUserVisit, updateUserVisit } from "@/lib/utils/supabase/queries";
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

	return new Response(
		JSON.stringify({ message: "User visit recorded successfully" }),
		{
			status: 200,
			headers: { "Content-Type": "application/json" },
		}
	);
}
