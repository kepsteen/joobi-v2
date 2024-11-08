interface HeadingProps {
	headingLevel: "h1" | "h2" | "h3" | "h4";
	children?: React.ReactNode;
	className?: string;
}

const headingVariants = {
	h1: "text-4xl font-semibold leading-none tracking-tight",
	h2: "text-2xl font-semibold leading-none tracking-tight",
	h3: "text-lg font-semibold leading-none tracking-tight",
	h4: "text-md leading-none tracking-tight",
};

const Heading = ({
	headingLevel,
	children,
	className,
	...rest
}: HeadingProps) => {
	const variantClass = headingVariants[headingLevel];

	const Heading = headingLevel as keyof JSX.IntrinsicElements;

	return (
		<Heading className={`${variantClass} ${className}`} {...rest}>
			{children}
		</Heading>
	);
};

Heading.displayName = "Heading";

export default Heading;
