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
				<CardContent>
					<div className="overflow-x-clip">
						<table className="table">
							{/* head */}
							<thead>
								<tr>
									<th>Status</th>
									<th>Company</th>
									<th>Position</th>
									<th>Applied</th>
									<th>Link</th>
									<th>Salary</th>
									<th>Location</th>
									<th>type</th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								{/* <tr>
									<th>1</th>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
								</tr> */}
								{/* row 2 */}
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
