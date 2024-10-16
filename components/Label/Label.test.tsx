import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
	it("renders correctly with proper class(es)", () => {
		render(
			<Label>
				<p data-testid="testChild">Label Children</p>
			</Label>
		);

		const label = screen.getByTestId("testLabel");
		expect(label).toBeInTheDocument();
		expect(label).toHaveClass("flex flex-col gap-2");

		const labelChildren = screen.getByTestId("testChild");
		expect(labelChildren).toHaveTextContent("Label Children");
	});
});
