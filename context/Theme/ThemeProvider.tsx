"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export type ThemeContextValues = {
	theme: string;
	changeTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextValues>({
	theme: "joobi-dark",
	changeTheme: () => undefined,
});

type Props = {
	children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
	const [theme, setTheme] = useState("joobi-dark");

	useEffect(() => {
		if (typeof window !== undefined) {
			const storedTheme = localStorage.getItem("theme") || "joobi-dark";
			setTheme(storedTheme);
		}
	}, []);

	function changeTheme(theme: string) {
		setTheme(theme);
		localStorage.setItem("theme", theme);
	}

	const contextValue = { theme, changeTheme };
	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
}
