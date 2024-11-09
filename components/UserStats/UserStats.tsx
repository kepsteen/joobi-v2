import { Flame } from "lucide-react";
import { Card, CardContent } from "../Card/Card";
// import { getStats } from "@/lib/utils/supabase/actions";
import { Stats, StatConfig } from "@/lib/types/types";
import {
	calculateApplications,
	calculateUserStreak,
} from "@/lib/utils/calculations";
import { getUserLevel, getUserXP } from "@/lib/utils/supabase/actions";

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
	{
		name: "Level",
		key: "levelValue",
		icon: null,
	},
	{
		name: "Total XP",
		key: "xpValue",
		icon: null,
	},
];

export const UserStats = async () => {
	const streak = await calculateUserStreak();
	const applications = await calculateApplications();
	const { xp } = await getUserXP();
	const xpValue = xp?.[0].total_xp as number;
	const { level } = await getUserLevel(xpValue);
	const levelValue = level?.[0].level as number;

	const stats = {
		streak,
		applications,
		levelValue,
		xpValue,
	};

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
