import Heading from "@/components/Heading/Heading";
import { Logo } from "@/components/Logo/Logo";
import Link from "next/link";

export const Nav = () => {
	return (
		<>
			<nav className="py-4 px-8">
				<Link href={"/home"}>
					<div className="flex items-center gap-2">
						<Heading headingLevel="h1">Joobi</Heading>
						<Logo src="/Joobert@2x.svg" />
					</div>
				</Link>
			</nav>
		</>
	);
};
