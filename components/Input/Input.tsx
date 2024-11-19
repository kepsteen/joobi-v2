import { cn } from "@/lib/utils/utils";

export const Input = ({
	className,
	...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			className={cn("input grow bg-white text-base-100", className)}
			{...props}
		/>
	);
};
