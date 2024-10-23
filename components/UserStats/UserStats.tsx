import { Flame } from "lucide-react";
import { Card, CardContent } from "../Card/Card";

const hardCodedStats = [
	{
		name: "Level",
		value: 6,
	},
	{
		name: "Applications",
		value: 3,
	},
	{
		name: "Daily Streak",
		value: 5,
	},
	{
		name: "Daily Challenges Completed",
		value: 15,
	},
	{
		name: "Weekly Challenges Completed",
		value: 7,
	},
];

export const UserStats = () => {
	return (
		<Card variant="outline" size="compact" className="w-full max-w-56">
			<CardContent className="flex flex-col gap-4">
				{hardCodedStats.map((stat) => (
					<div key={stat.name} className="flex justify-between">
						<p>{stat.name}</p>
						<span className="flex items-center text-primary">
							{stat.name === "Daily Streak" && <Flame size={20} />}
							<p>{stat.value}</p>
						</span>
					</div>
				))}
			</CardContent>
		</Card>
	);
};
