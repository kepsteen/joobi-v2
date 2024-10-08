import { cookies } from "next/headers";
import ThemeSwitcher from "./ThemeSwitcher";

// Put this in the page/header to allow user to switch the theme
export default function ThemeProvider() {
	const theme = ["joobi-dark", "light"];
	const themeCookie = cookies().get("theme");
	const currentTheme = themeCookie ? themeCookie.value : theme[0];
	return <ThemeSwitcher theme={currentTheme} list={theme} />;
}
