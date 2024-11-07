import { UserAchievements } from "@/components/UserAchievements/UserAchievements";
import { UserStats } from "@/components/UserStats/UserStats";

export default function Home() {
	return (
		<section className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-around">
			<UserStats />
			<UserAchievements />
		</section>
	);
}
