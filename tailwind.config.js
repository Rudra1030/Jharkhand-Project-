/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5d0',
          300: '#8dd1b3',
          400: '#56b590',
          500: '#2F6A4A', // Main earthy green
          600: '#275a3e',
          700: '#214a33',
          800: '#1e3c2a',
          900: '#1a3224',
        },
        secondary: {
          50: '#fef7f3',
          100: '#fdede6',
          200: '#fbd8cc',
          300: '#f7bca6',
          400: '#f3957a',
          500: '#C9613B', // Warm terracotta
          600: '#b54d2a',
          700: '#973d23',
          800: '#7a3224',
          900: '#632b20',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        beige: {
          50: '#F6EDE6',
          100: '#f0e4d8',
          200: '#e6d4c2',
          300: '#d9c0a6',
          400: '#cca88a',
          500: '#bf9070',
          600: '#b27c56',
          700: '#a5683c',
          800: '#985422',
          900: '#8b4008',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
