import { createClient } from "./client";

export async function getApplications() {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data: applications, error } = await supabase
		.from("applications")
		.select()
		.eq("user_id", user?.id as string);
	return { applications, error };
}
