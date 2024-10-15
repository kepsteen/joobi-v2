import { render, screen } from "@testing-library/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./Card";

const variants: Array<
	"default" | "secondary" | "outline" | "accent" | null | undefined
> = ["default", "secondary", "outline", "accent"];

const sizes: Array<"default" | "compact"> = ["default", "compact"];

const variantClasses = {
	default: "bg-neutral text-base-100",
	secondary: "bg-secondary text-neutral",
	outline: "bg-base-100 text-neutral card-bordered border-neutral",
	accent: "bg-accent text-neutral",
};

const sizeClasses = {
	default: "p-4",
	compact: "card-compact",
};

describe("Card", () => {
	variants.forEach((variant) => {
		sizes.forEach((size) => {
			it(`renders the card correctly with variant ${variant} and size ${size}`, () => {
				render(<Card data-testid="testCard" variant={variant} size={size} />);

				const card = screen.getByTestId("testCard");
				expect(card).toBeInTheDocument();

				if (variant) {
					expect(card).toHaveClass(variantClasses[variant]);
				}
				if (size) {
					expect(card).toHaveClass(sizeClasses[size]);
				}
			});
		});
	});
	it(`renders correctly with className attribute and proper className(s) are passed via the prop`, () => {
		render(
			<Card
				data-testid="customClassCard"
				className="customClassCard bg-red-500"
			/>
		);

		const cardCustom = screen.getByTestId("customClassCard");
		expect(cardCustom).toBeInTheDocument();

		if (cardCustom.hasAttribute("className")) {
			expect(cardCustom).toHaveClass("customClassCard", "bg-red-500");
		}
	});
	it("renders correctly with CardHeader, CardTitle, CardDescription and CardContent components", () => {
		render(
			<Card>
				<CardHeader data-testid="cardHeader">
					<CardTitle data-testid="cardTitle">Card Title</CardTitle>
					<CardDescription data-testid="cardDescription">
						Card Description
					</CardDescription>
				</CardHeader>
				<CardContent data-testid="cardContent">Card Content</CardContent>
			</Card>
		);

		const cardHeader = screen.getByTestId("cardHeader");
		const cardTitle = screen.getByTestId("cardTitle");
		const cardDescription = screen.getByTestId("cardDescription");
		const cardContent = screen.getByTestId("cardContent");

		expect(cardHeader).toBeInTheDocument();
		expect(cardTitle).toBeInTheDocument();
		expect(cardDescription).toBeInTheDocument();
		expect(cardContent).toBeInTheDocument();

		expect(cardTitle).toHaveTextContent("Card Title");
		expect(cardDescription).toHaveTextContent("Card Description");
		expect(cardContent).toHaveTextContent("Card Content");
	});
});
