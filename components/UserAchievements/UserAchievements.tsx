import { Atom, Baby, BugOff } from "lucide-react";
import { Card, CardContent, CardTitle } from "../Card/Card";

const hardCodedAchievements = [
	{
		name: "React Specialist",
		icon: <Atom />,
		color: "text-yellow-500",
	},
	{
		name: "Exterminator",
		icon: <BugOff />,
		color: "text-gray-300",
	},
	{
		name: "Junior Applicant",
		icon: <Baby />,
		color: "text-yellow-900",
	},
];

export const UserAchievements = () => {
	return (
		<Card variant="outline" size="compact" className="w-full max-w-56">
			<CardTitle className="mx-auto p-2">Achievements</CardTitle>
			<CardContent>
				{hardCodedAchievements.map((achievement) => (
					<div
						key={achievement.name}
						className={`flex gap-2 ${achievement.color}`}
					>
						{achievement.name}
						<span>{achievement.icon}</span>
					</div>
				))}
			</CardContent>
		</Card>
	);
};
