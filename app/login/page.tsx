import { getUser } from "@/lib/utils/supabase/server";
import { login, signup, loginWithGithub } from "./actions";

export default async function LoginPage() {
	const user = await getUser();

	return (
		<>
			<form>
				<label htmlFor="email">Email:</label>
				<input id="email" name="email" type="email" />
				<label htmlFor="password">Password:</label>
				<input id="password" name="password" type="password" />
				<button formAction={login}>Log in</button>
				<button formAction={signup}>Sign up</button>
			</form>
			<h2>{user && "Logged In with Github"}</h2>
			<button onClick={loginWithGithub}>Login wiht Github</button>
		</>
	);
}
