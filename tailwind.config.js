/** @format */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'move-up': 'moveUp 3s ease-in-out',
				'move-down': 'moveDown 3s ease-in-out',
			},
			keyframes: {
				moveUp: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-100px)' },
				},
				moveDown: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100px)' },
				},
			},
		},
	},
	plugins: [],
}
