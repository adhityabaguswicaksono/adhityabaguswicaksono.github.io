/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				abw: {
					50: 'rgb(230, 241, 251)',
					100: 'rgb(176, 211, 243)',
					200: 'rgb(138, 189, 237)',
					300: 'rgb(84, 159, 228)',
					400: 'rgb(51, 141, 223)',
					500: 'rgb(0, 112, 215)',
					600: 'rgb(0, 102, 196)',
					700: 'rgb(0, 80, 153)',
					800: 'rgb(0, 62, 118)',
					900: 'rgb(0, 47, 90)',
				},
			},
		},
	},
	plugins: [],
};
