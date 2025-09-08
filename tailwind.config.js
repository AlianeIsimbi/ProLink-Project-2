/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B7410E',
          50: '#FDF2F0',
          100: '#FCE4E0',
          200: '#F8C9C0',
          300: '#F4AEA0',
          400: '#F09380',
          500: '#EC7860',
          600: '#E85D40',
          700: '#B7410E',
          800: '#8A330B',
          900: '#5D2207',
        },
        rust: {
          50: '#FDF2F0',
          100: '#FCE4E0',
          200: '#F8C9C0',
          300: '#F4AEA0',
          400: '#F09380',
          500: '#EC7860',
          600: '#E85D40',
          700: '#B7410E',
          800: '#8A330B',
          900: '#5D2207',
        }
      },
      darkMode: {
        colors: {
          primary: {
            DEFAULT: '#EC7860',
            50: '#5D2207',
            100: '#8A330B',
            200: '#B7410E',
            300: '#E85D40',
            400: '#EC7860',
            500: '#F09380',
            600: '#F4AEA0',
            700: '#F8C9C0',
            800: '#FCE4E0',
            900: '#FDF2F0',
          }
        }
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'fadeInLeft': 'fadeInLeft 0.6s ease-out',
        'fadeInRight': 'fadeInRight 0.6s ease-out',
        'hover-lift': 'hover-lift 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'hover-lift': {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(-2px)'
          }
        }
      }
    },
  },
  plugins: [],
}
