import { Database } from "@/lib/types/supabase";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const getUser = async () => {
	const supabase = createClient();
	const user = (await supabase.auth.getUser()).data.user;

	return user;
};

export function createClient() {
	const cookieStore = cookies();

	return createServerClient<Database>(
		process.env.SUPABASE_URL!,
		process.env.SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll();
				},
				setAll(cookiesToSet) {
					try {
						cookiesToSet.forEach(({ name, value, options }) =>
							cookieStore.set(name, value, options)
						);
					} catch {
						// The `setAll` method was called from a Server Component.
						// This can be ignored if you have middleware refreshing
						// user sessions.
					}
				},
			},
		}
	);
}
