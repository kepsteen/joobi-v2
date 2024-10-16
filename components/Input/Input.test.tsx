import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
	it("renders correctly", () => {
		render(<Input data-testid="testInput" />);

		const input = screen.getByTestId("testInput");
		expect(input).toBeInTheDocument();
	});
});
