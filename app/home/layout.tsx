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
				<div className="sm:flex sm:flex-row-reverse">
					<main className="w-full h-screen">
						<Link href="/home" className="sm:hidden">
							<NameLogo />
						</Link>
						<section className="m-4">{children}</section>
					</main>
					<NavBar />
				</div>
			</body>
		</html>
	);
}
