"use client";

import ApplicationsTable from "@/components/ApplicationsTable/ApplicationsTable";
import { Button } from "@/components/Button/Button";
import { Card, CardContent } from "@/components/Card/Card";
import Heading from "@/components/Heading/Heading";
import NewApplicationModal from "@/components/NewApplicationModal/NewApplicationModal";
import { ListPlus } from "lucide-react";

export default function Applications() {
	return (
		<section className="h-full flex flex-col">
			<div className="shrink-0 flex justify-between items-center mb-4">
				<div>
					<Heading
						headingLevel="h1"
						className="text-2xl text-neutral mb-2 z-50"
					>
						Applications
					</Heading>
					<p>Manage your Applications.</p>
				</div>
				<Button
					variant="link"
					onClick={() =>
						(
							document.getElementById(
								"new_application_modal"
							) as HTMLDialogElement
						)?.showModal()
					}
				>
					<ListPlus size={32} color="oklch(var(--p))" />
				</Button>
			</div>
			<Card
				variant="outline"
				className="max-w-full p-0 flex-1 min-h-0"
				size="compact"
			>
				<CardContent className="h-full">
					<ApplicationsTable />
				</CardContent>
			</Card>
			<NewApplicationModal />
		</section>
	);
}
