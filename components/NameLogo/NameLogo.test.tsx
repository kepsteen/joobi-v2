import { render, screen } from "@testing-library/react";
import { NameLogo } from "./NameLogo";

describe("NameLogo", () => {
	it("renders correctly", () => {
		render(<NameLogo />);

		const nameLogo = screen.getByTestId("testNameLogo");
		const joobi = screen.getByTestId("testJoobi");

		expect(nameLogo).toBeInTheDocument();
		expect(joobi).toBeInTheDocument();
	});
});
