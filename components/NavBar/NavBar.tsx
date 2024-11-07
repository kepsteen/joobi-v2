import { House, List, Scroll, Shield, Users } from "lucide-react";
import Link from "next/link";
import { NameLogo } from "../NameLogo/NameLogo";
import { Logo } from "../Logo/Logo";
import { cn } from "@/lib/utils/utils";

type NavItemProps = {
	children: React.ReactNode;
	name: string;
};

const navItems = [
	{
		icon: <House />,
		name: "Home",
		href: "/home",
	},
	{
		icon: <List />,
		name: "Applications",
		href: "/home/applications",
	},
	{
		icon: <Shield />,
		name: "Leagues",
		href: "/home/leagues",
	},
	{
		icon: <Scroll />,
		name: "Challenges",
		href: "/home/challenges",
	},
	{
		icon: <Users />,
		name: "Friends",
		href: "/home/friends",
	},
];

const NavItem = ({ children, name }: NavItemProps) => {
	return (
		<span className="flex gap-1 hover:outline outline-primary rounded-md p-1">
			{children}
			<p className="hidden md:block">{name}</p>
		</span>
	);
};

type NavBarProps = {
	className?: string;
};

export const NavBar = ({ className }: NavBarProps) => {
	return (
		<nav
			className={cn(
				"w-full sticky bottom-0 sm:top-0 sm:left-0 sm:w-fit sm:h-screen",
				className
			)}
		>
			<ul className="flex sm:flex-col sm:h-full sm:justify-start sm:items-center md:items-start sm:border-t-0 sm:border-r-2 sm:border-r-primary text-primary w-full justify-center gap-4 bg-base-100 p-6 border-t-2 border-t-primary">
				<li className="text-primary">
					<Link href="/home">
						<NameLogo className="hidden md:flex" />
						<Logo
							src="/Joobert@2x.svg"
							data-testid="testJoobiLogo"
							className="hidden sm:block md:hidden"
						/>
					</Link>
				</li>
				{navItems.map((item) => (
					<li key={item.name}>
						<Link href={item.href} aria-label={item.name}>
							<NavItem name={item.name}>{item.icon}</NavItem>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
