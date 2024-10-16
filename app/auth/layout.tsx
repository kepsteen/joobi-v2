import { ReactNode } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/Card/Card";
import { NameLogo } from "@/components/NameLogo/NameLogo";

export interface AuthLayoutProps {
	children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<main className="min-h-screen flex justify-center items-center bg-[url(/joobert-bg.svg)] bg-auto">
			<Card className="flex flex-col items-center justify-center px-0 sm:p-4">
				<CardHeader>
					<CardTitle>
						<NameLogo />
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col">{children}</CardContent>
			</Card>
		</main>
	);
}
