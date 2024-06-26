/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'cremeux': '#fefae0',
      },
      screens: {
        'xxl': '1440px', // Ajout d'un breakpoint personnalisé 'xxl'
        'custom-breakpoint': '840px',  // Point de rupture personnalisé
      },
      keyframes: {
        'scale-up-bl': {
          '0%': {
            transform: 'scale(0.5)',
            transformOrigin: 'bottom left'
          },
          '100%': {
            transform: 'scale(1)',
            transformOrigin: 'bottom left'
          }
        },
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' }  // Scale up by 5% (Adjust if needed)
        }
      },
      animation: {
        'scale-up-bl': 'scale-up-bl 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'scale-up': 'scale-up 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
