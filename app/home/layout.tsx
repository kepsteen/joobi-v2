import { NameLogo } from "@/components/NameLogo/NameLogo";
import { NavBar } from "@/components/NavBar/NavBar";
import Link from "next/link";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div className="sm:grid sm:grid-cols-[1fr_max-content]">
					<main className="h-screen sm:order-2">
						<Link href="/home" className="sm:hidden">
							<NameLogo />
						</Link>
						{children}
					</main>
					<NavBar className="sm:order-1" />
				</div>
			</body>
		</html>
	);
}
