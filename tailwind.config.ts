import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx,html}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	daisyui: {
		themes: [
			{
				"joobi-dark": {
					primary: "#09DE5B",
					secondary: "#058C42",
					accent: "#7A98CD",
					neutral: "#EEF9F2",
					"base-100": "#020202",
				},
			},
			"light",
			"dark",
		],
	},
	plugins: [daisyui],
};
export default config;
