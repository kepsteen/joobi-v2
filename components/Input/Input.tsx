export const Input = ({
	...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
	return <input className="input grow bg-white text-base-100" {...props} />;
};
