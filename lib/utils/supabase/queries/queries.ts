import { createClient } from "../server";

export async function getXpToLevel() {
	const supabase = createClient();
	const { data } = await supabase.from("xp_to_level").select();
	return data;
}
