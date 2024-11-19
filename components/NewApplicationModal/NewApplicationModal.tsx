import { Button } from "../Button/Button";
import { X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../Card/Card";
import { Label } from "../Label/Label";
import { Input } from "../Input/Input";

export default function NewApplicationModal() {
	return (
		<dialog id="new_application_modal" className="modal">
			<Card variant="outline" className="modal-box border-primary">
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
					<CardTitle className="pr-8 text-primary">
						Add New Application
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form action="">
						<Label className="text-primary">
							Stage
							<Input />
						</Label>
					</form>
				</CardContent>
			</Card>
		</dialog>
	);
}
