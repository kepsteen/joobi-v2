import { ReactNode } from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children?: ReactNode;
}

export const Label = ({ children }: LabelProps) => {
	return (
		<label className="flex flex-col gap-2" data-testid="testLabel">
			{children}
		</label>
	);
};
