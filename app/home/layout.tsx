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
				<div className="flex flex-col sm:flex-row h-screen">
					<NavBar className="order-last sm:order-first" />
					<main className="flex-1 overflow-auto p-4">
						<Link href="/home" className="sm:hidden">
							<NameLogo />
						</Link>
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
