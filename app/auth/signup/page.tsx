import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Label } from "@/components/Label/Label";
import { signup } from "../actions";

export default function SignupPage() {
	return (
		<form className="flex flex-col space-y-4 w-full max-w-md max-h-[1000px]">
			<Label>
				Email
				<Input id="email" name="email" type="email" placeholder="Email" />
			</Label>
			<Label>
				Username
				<Input id="username" name="username" placeholder="Username" />
			</Label>
			<Label>
				Password
				<Input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
				/>
			</Label>
			<Label>
				Password
				<Input
					id="confirmPassword"
					name="confirmPassword"
					type="password"
					placeholder="Confirm Password"
				/>
			</Label>
			<Button variant="secondary" formAction={signup}>
				Sign Up
			</Button>
		</form>
	);
}
