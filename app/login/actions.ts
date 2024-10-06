"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/utils/supabase/server";

export async function login(formData: FormData) {
	const supabase = createClient();

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signup(formData: FormData) {
	const supabase = createClient();

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const userData = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { data, error } = await supabase.auth.signUp(userData);

	if (error) {
		redirect("/error");
	}

	if (data.user && data.user.id) {
		// Optionally, you can sign in the user immediately after signup
		await supabase.auth.signInWithPassword(userData);
		revalidatePath("/", "layout");
		redirect("/");
	}
}

export async function loginWithGithub() {
	const supabase = createClient();

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "github",
		options: {
			redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
		},
	});

	if (error) {
		redirect("/error");
	}

	if (data?.url) {
		return redirect(data.url);
	}
}

export async function signOut() {
	const supabase = createClient();

	await supabase.auth.signOut();

	redirect("/");
}
