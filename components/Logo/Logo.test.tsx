import React from "react";
import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
	it("renders the logo", () => {
		render(<Logo src="/Joobert@2x.svg" data-testid="testLogo" />);

		expect(screen.getByAltText("Joobert (Joobi Mascot)")).toBeInTheDocument();
	});
});
