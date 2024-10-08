import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names
 * @param inputs - The class names to combine
 * @returns The combined class names
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
