import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/utils";

const cardVariants = cva("card max-w-fit shadow-md", {
	variants: {
		variant: {
			default: "bg-neutral text-base-100",
			outline: "bg-base-100 text-neutral card-bordered border-neutral",
			secondary: "bg-secondary text-neutral",
			accent: "bg-accent text-neutral",
		},
		size: {
			default: "p-4",
			compact: "card-compact",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type CardProps = React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof cardVariants>;

// Add CardFooter if needed
const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ className, variant, size, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(cardVariants({ variant, size, className }))}
			{...props}
		></div>
	)
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("header-classes", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3 ref={ref} className={cn("card-title", className)} {...props}></h3>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("p-classes", className)} {...props}></p>
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("card-body", className)} {...props}></div>
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardDescription, CardTitle, CardContent };
