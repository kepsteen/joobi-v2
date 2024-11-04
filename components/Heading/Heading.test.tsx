import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

const variants: Array<"h1" | "h2" | "h3" | "h4"> = ["h1", "h2", "h3", "h4"];

const variantClasses = {
	h1: "text-[3rem] font-semibold leading-none tracking-tight",
	h2: "text-[2rem] font-semibold leading-none tracking-tight",
	h3: "text-[1.5rem] font-semibold leading-none tracking-tight",
	h4: "text-[1.25rem] leading-none tracking-tight",
};

describe("Heading", () => {
	variants.forEach((variant) => {
		it(`renders correctly with ${variant}`, () => {
			render(
				<Heading data-testid="testHeader" headingLevel={variant}>
					Test Header
				</Heading>
			);

			const header = screen.getByTestId("testHeader");
			expect(header).toBeInTheDocument();

			if (variant) {
				expect(header).toHaveClass(variantClasses[variant]);
			}
		});
	});
	it(`renders correctly with className attribute and additional classes passed via the prop`, () => {
		render(
			<Heading
				data-testid="customClassHeader"
				headingLevel="h1"
				className="customClassHeader text-red-500"
			>
				Custom Test Header
			</Heading>
		);

		const headerCustom = screen.getByTestId("customClassHeader");
		expect(headerCustom).toBeInTheDocument();

		if (headerCustom.hasAttribute("className")) {
			expect(headerCustom).toHaveClass("customClassHeader", "text-red-500");
		}
	});
});
