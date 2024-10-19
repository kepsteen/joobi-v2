import { NavBar } from "@/components/NavBar/NavBar";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<section className="sm:flex sm:flex-row-reverse">
					{children}
					<NavBar />
				</section>
			</body>
		</html>
	);
}
