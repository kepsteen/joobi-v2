import React from "react";
import { render } from "@testing-library/react";
import { ThemeContext } from "./ThemeProvider";
import ClientThemeWrapper from "./ClientThemeWrapper";

describe("ClientThemeWrapper", () => {
	it("applies the theme from the ThemeContext", () => {
		const theme = "dark-theme";
		const { container } = render(
			<ThemeContext.Provider value={{ theme, changeTheme: jest.fn() }}>
				<ClientThemeWrapper>
					<div>Test Content</div>
				</ClientThemeWrapper>
			</ThemeContext.Provider>
		);

		expect(container.firstChild).toHaveAttribute("data-theme", theme);
	});

	it("renders children correctly", () => {
		const theme = "light-theme";
		const { getByText } = render(
			<ThemeContext.Provider value={{ theme, changeTheme: jest.fn() }}>
				<ClientThemeWrapper>
					<div>Test Content</div>
				</ClientThemeWrapper>
			</ThemeContext.Provider>
		);

		expect(getByText("Test Content")).toBeInTheDocument();
	});
});
