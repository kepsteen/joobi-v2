import { Card, CardContent } from "@/components/Card/Card";
import Heading from "@/components/Heading/Heading";
import { ListPlus } from "lucide-react";

export default function Applications() {
	return (
		<section className="">
			<div className="flex justify-between items-center mb-4">
				<div>
					<Heading headingLevel="h1" className="text-2xl text-neutral mb-2">
						Applications
					</Heading>
					<p>Manage your Applications.</p>
				</div>
				<ListPlus size={32} color="oklch(var(--p))" />
			</div>
			<Card variant="outline" className="max-w-full" size="compact">
				<CardContent>im da card</CardContent>
			</Card>
		</section>
	);
}
