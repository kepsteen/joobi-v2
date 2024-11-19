import { Button } from "../Button/Button";
import { X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../Card/Card";
import { Label } from "../Label/Label";
import { Input } from "../Input/Input";

export default function NewApplicationModal() {
	return (
		<dialog id="new_application_modal" className="modal">
			<Card variant="outline" className="modal-box">
				<form method="dialog">
					<Button
						type="submit"
						size="sm"
						className="absolute right-2 top-2 p-2"
					>
						<X size={16} />
					</Button>
				</form>
				<CardHeader>
					<CardTitle className="pr-8 text-neutral">
						Add New Application
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form action="" className="flex flex-col gap-2">
						<Label className="text-primary">
							Stage
							<Input
								name="stage"
								className="bg-base-100 border border-neutral text-neutral focus:ring focus:ring-primary"
							/>
						</Label>
						<Label className="text-primary">
							Company
							<Input
								name="company"
								className="bg-base-100 border border-neutral text-neutral focus:ring focus:ring-primary"
							/>
						</Label>
						<Label className="text-primary">
							Position
							<Input
								name="position"
								className="bg-base-100 border border-neutral text-neutral focus:ring focus:ring-primary"
							/>
						</Label>
						<Label className="text-primary">
							Link
							<Input
								name="link"
								className="bg-base-100 border border-neutral text-neutral focus:ring focus:ring-primary"
							/>
						</Label>
						<Label className="text-primary">
							Location
							<Input
								name="location"
								className="bg-base-100 border border-neutral text-neutral focus:ring focus:ring-primary"
							/>
						</Label>
						<Label className="text-primary">
							Job Description
							<Input
								name="job-description"
								className="bg-base-100 border border-neutral text-neutral focus:ring focus:ring-primary"
							/>
						</Label>
					</form>
				</CardContent>
			</Card>
		</dialog>
	);
}
