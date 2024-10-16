import { Logo } from "../Logo/Logo";

export const NameLogo = () => {
	return (
		<div className="flex items-center" data-testid="testNameLogo">
			<p className="text-4xl text-secondary" data-testid="testJoobi">
				Joobi
			</p>
			<Logo src="/Joobert-light.svg" data-testid="testJoobiLogo" />
		</div>
	);
};
