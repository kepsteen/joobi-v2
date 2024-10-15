import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

const variants: Array<
	| "default"
	| "outline"
	| "error"
	| "secondary"
	| "accent"
	| "link"
	| null
	| undefined
> = ["default", "outline", "error", "secondary", "accent", "link"];
const sizes: Array<"default" | "sm" | "lg" | "icon" | null | undefined> = [
	"default",
	"sm",
	"lg",
	"icon",
];

const variantClasses = {
	default: "bg-primary text-base-100 hover:bg-primary/80",
	outline: "btn-outline bg-base-100 hover:bg-neutral hover:text-base-100",
	error: "bg-error text-white hover:bg-error/80",
	secondary: "bg-secondary text-white hover:bg-secondary/80",
	accent: "bg-accent text-base-100 hover:bg-accent/80",
	link: "text-primary underline underline-offset-4 hover:text-primary/80",
};

const sizeClasses = {
	default: "btn-md",
	sm: "btn-sm",
	lg: "btn-large",
	icon: "btn-square",
};
describe("Button", () => {
	variants.forEach((variant) => {
		sizes.forEach((size) => {
			it(`renders correctly with variant ${variant} and size ${size}`, () => {
				render(
					<Button data-testid="testButton" variant={variant} size={size}>
						Test Button
					</Button>
				);

				const button = screen.getByTestId("testButton");
				expect(button).toBeInTheDocument();

				// Check if the button has the correct class for the variant and size
				if (variant) {
					expect(button).toHaveClass(variantClasses[variant]);
				}
				if (size) {
					expect(button).toHaveClass(sizeClasses[size]);
				}
			});
		});
	});
	it(`renders correctly with className attribute and proper className(s) are passed via the prop`, () => {
		render(
			<Button
				data-testid="customClassButton"
				className="customClassButton bg-red-500"
			>
				Custom Test Button
			</Button>
		);

		const buttonCustom = screen.getByTestId("customClassButton");
		expect(buttonCustom).toBeInTheDocument();

		if (buttonCustom.hasAttribute("className")) {
			expect(buttonCustom).toHaveClass("customClassButton", "bg-red-500");
		}
	});
});
