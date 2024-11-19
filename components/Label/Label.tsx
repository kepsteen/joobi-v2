import { cn } from "@/lib/utils/utils";
import { ReactNode } from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children?: ReactNode;
	className: string;
}

export const Label = ({ children, className }: LabelProps) => {
	return (
		<label
			className={cn("flex flex-col gap-2", className)}
			data-testid="testLabel"
		>
			{children}
		</label>
	);
};
