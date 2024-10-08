import { cookies } from "next/headers";
import ThemeSwitcher from "./ThemeSwitcher";

// This is the component that you'll put in your page/header/any area.
export default function ThemeProvider() {
	const theme = ["joobi-dark", "light"];
	const themeCookie = cookies().get("theme");
	const currentTheme = themeCookie ? themeCookie.value : theme[0];
	return <ThemeSwitcher theme={currentTheme} list={theme} />;
}
