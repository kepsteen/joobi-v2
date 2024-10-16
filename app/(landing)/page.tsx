import { Button } from "@/components/Button/Button";
import Heading from "@/components/Heading/Heading";
import { Nav } from "@/components/Navigation/Nav";
import Link from "next/link";

export default function LandingPage() {
	return (
		<>
			<main className="w-screen h-screen flex flex-col justify-center items-center">
				<div className="px-8 max-w-[400px] text-center flex flex-col gap-4 justify-center items-center">
					<Nav />
					<Heading
						headingLevel="h2"
						className="text-xl font-normal text-neutral mb-4"
					>
						The free, fun and effective way to track applications and level up
						your technical skills.
					</Heading>
					<Link href="/auth/signup" className="w-full">
						<Button variant="default" className="btn-block">
							Get Started
						</Button>
					</Link>
					<Link href="/auth/login" className="w-full">
						<Button variant="outline" className="btn-block">
							I already have an account
						</Button>
					</Link>
				</div>
			</main>
		</>
	);
}
