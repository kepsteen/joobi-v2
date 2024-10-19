import { cn } from "@/lib/utils/utils";
import { Logo } from "../Logo/Logo";

type NameLogoProps = {
	className?: string;
};

export const NameLogo = ({ className }: NameLogoProps) => {
	return (
		<div
			className={cn("flex items-center", className)}
			data-testid="testNameLogo"
		>
			<p className="text-4xl text-inherit" data-testid="testJoobi">
				Joobi
			</p>
			<Logo src="/Joobert@2x.svg" data-testid="testJoobiLogo" />
		</div>
	);
};
