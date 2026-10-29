/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#FAF8F5',
        'surface-card': '#FFFFFF',
        'surface-card-hover': '#FCF9F1',
        'accent-yellow': '#F4D36C',
        'accent-pastel': '#FDF4D4',
        'accent-gold': '#D4A346',
        'accent-amber': '#E5B242',
        'text-primary': '#23211E',
        'text-muted': '#78716C',
        'border-hairline': 'rgba(218, 185, 114, 0.3)',
        'glass-header': 'rgba(250, 248, 245, 0.88)',
        pastel: {
          50: '#FFFEFA',
          100: '#FFFCEB',
          200: '#FDF4D4',
          300: '#F7E49A',
          400: '#F4D36C',
          500: '#ECC850',
          600: '#D4A346',
        },
        warmwhite: {
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#FAF8F5',
          300: '#F5F1EA',
          400: '#ECE6DC',
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'pastel-glow': '0 0 25px rgba(244, 211, 108, 0.35)',
        'pastel-card': '0 12px 32px -8px rgba(180, 150, 90, 0.09), 0 2px 8px -2px rgba(180, 150, 90, 0.05)',
        'pastel-btn': '0 6px 20px rgba(236, 200, 80, 0.4)',
        'soft-inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.02)',
      },
      borderRadius: {
        'card': '16px',
      }
    },
  },
  plugins: [],
}
