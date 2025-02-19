/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		darkmode: 'class',
  		screens: {
  			xxs: '360px',
  			xs: '480px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px',
  			'3xl': '1800px',
  			'4xl': '2100px',
  			'5xl': '2560px',
  			'6xl': '3200px'
  		},
  		colors: {
  			'primary-main': '#2A7F62',
  			'primary-mid': '#2A7F62',
  			'primary-light': '#2A7F62',
  			'secondary-main': '#5E239D',
  			'secondary-mid': '#5E239D',
  			'secondary-light': '#5E239D',
  			error: '#ff2c2c',
  			'error-light': '#FA5053',
  			success: '#50C878',
  			'success-light': '#5be187',
  			info: '#ffe800',
  			gray: {
  				'25': '#fcfcfd',
  				'50': '#f9fafb',
  				'100': '#f3f4f6',
  				'200': '#e5e7eb',
  				'300': '#d1d5db',
  				'400': '#9ca3af',
  				'500': '#6b7280',
  				'600': '#4b5563',
  				'700': '#374151',
  				'800': '#1f2937',
  				'900': '#111827'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
