export interface Stats {
	streak: number;
	applications: number;
}

export interface StatConfig {
	name: string;
	key: keyof Stats;
	icon: React.ReactNode;
}
