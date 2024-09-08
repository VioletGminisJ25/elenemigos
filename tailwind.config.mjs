/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			// Aquí se pueden poner como en un json unas claves que hagan referencia a una url o imagen o incluso reglas css para tener más completado con tailwind
			colors: {
				'venetian-red': {
					'100': '#ffdfdf',
					'50': '#fff1f1',
					'300': '#ff9d9d',
					'200': '#ffc5c5',
					'500': '#ff3333',
					'400': '#ff6464',
					'700': '#c80d0d',
					'600': '#ee1414',
					'900': '#701010',
					'800': '#a50f0f',
					'950': '#4b0404',
				},
    
			},
			screens: {
				tablet: "640px",
				// => @media (min-width: 640px) { ... }

				laptop: "1024px",
				// => @media (min-width: 1024px) { ... }

				desktop: "1280px",
				// => @media (min-width: 1280px) { ... }
			},
		},
		plugins: [],
	},
};
