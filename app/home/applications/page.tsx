import { Card, CardContent } from "@/components/Card/Card";
import Heading from "@/components/Heading/Heading";
import { ListPlus, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

interface Applications {
	status: "Applied" | "To apply" | "Rejected" | "No answer";
	company: string;
	position: string;
	applied: string;
	link: string;
	salary: string;
	location: string;
	type: "Remote" | "On-site" | "Hybrid";
}

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
			<Card variant="outline" className="max-w-full p-0" size="compact">
				<CardContent>
					<div className="overflow-x-clip">
						<table className="table text-sm">
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
								<tr>
									<td>
										<span className="badge badge-error">Applied</span>
									</td>
									<td>Acme Corp</td>
									<td>Software Engineer</td>
									<td className="text-nowrap">10/12/24</td>
									<td>
										<Link
											href="https://www.acmecorp.com/careers"
											target="_blank"
											rel="noopener noreferrer"
										>
											<LinkIcon className="text-accent" />
										</Link>
									</td>
									<td>$100,000</td>
									<td className="">New York, NY</td>
									<td>Full-time</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
