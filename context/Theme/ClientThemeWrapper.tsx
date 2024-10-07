"use client";

import { ReactNode, useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

type Props = {
	children: ReactNode;
};

export default function ClientThemeWrapper({ children }: Props) {
	const { theme } = useContext(ThemeContext);

	return <div data-theme={theme}>{children}</div>;
}
