import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import "@/app/globals.css";

const martian = Martian_Mono({
	subsets: ["latin"],
	weight: "variable",
	display: "swap",
	variable: "--font-martian",
});

export const metadata: Metadata = {
	title: "Joobi",
	description: "Generated by create next app",
	icons: {
		icon: [
			{
				url: "/favicon.196x196.png",
				sizes: "196x196",
				type: "image/png",
			},
			{
				url: "/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${martian.className}`}>{children}</body>
		</html>
	);
}
