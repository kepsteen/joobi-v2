import { cn } from "@/lib/utils/utils";
import Image from "next/image";

interface LogoProps {
	src: string;
	className?: string;
}

/**
 * Logo component for displaying an image.
 *
 * @component
 * @param {Object} props - The Logo props.
 * @param {string} props.src - The source URL of the image.
 * @param {string} [props.className] - Optional CSS class name for additional styling.
 * @returns {JSX.Element} A div containing a next Image component.
 */

export const Logo = ({ className, src }: LogoProps): JSX.Element => {
	return (
		<div className={cn("relative h-[64px] w-[85px]", className)}>
			<Image
				data-testid="joobi-logo"
				src={src}
				alt="Joobert (Joobi Mascot)"
				fill
				sizes="(max-width: 1200px) 100vw, 50vw"
				priority
			/>
		</div>
	);
};
