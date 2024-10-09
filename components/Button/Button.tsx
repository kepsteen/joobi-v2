import React, { JSX } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/utils";

const buttonVariants = cva("btn ring-neutral", {
	variants: {
		variant: {
			default: "bg-primary text-base-100 hover:bg-primary/80",
			outline: "btn-outline bg-base-100 hover:bg-neutral hover:text-base-100",
			error: "bg-error text-white hover:bg-error/80",
			secondary: "bg-secondary text-white hover:bg-secondary/80",
			accent: "bg-accent text-base-100 hover:bg-accent/80",
			link: "text-primary underline underline-offset-4 hover:text-primary/80",
		},
		size: {
			default: "btn-md",
			sm: "btn-sm",
			lg: "btn-large",
			icon: "btn-square",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	label?: boolean | JSX.Element | string;
	icon?: JSX.Element;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, children, variant, size, label, icon, ...props },
		ref
	): JSX.Element => {
		return (
			<button
				type="button"
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{React.isValidElement(icon) && icon}
				{label}
				{children}
			</button>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
