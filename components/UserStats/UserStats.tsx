import { Flame } from "lucide-react";
import { Card, CardContent } from "../Card/Card";
import { getStats } from "@/lib/utils/calculations/calculations";
import { Stats, StatConfig } from "@/lib/types/types";

const STATS_CONFIG: StatConfig[] = [
	{
		name: "Daily Streak",
		key: "streak",
		icon: <Flame size={20} />,
	},
	{
		name: "Applications",
		key: "applications",
		icon: null,
	},
];

export const UserStats = async () => {
	const stats = await getStats();
	return (
		<Card variant="outline" size="compact" className="w-full max-w-56">
			<CardContent className="flex flex-col gap-4">
				{STATS_CONFIG.map((stat) => (
					<div key={stat.name} className="flex justify-between">
						<p>{stat.name}</p>
						<span className="flex items-center text-primary">
							{stat.icon}
							<p>{stats[stat.key as keyof Stats]}</p>
						</span>
					</div>
				))}
			</CardContent>
		</Card>
	);
};
