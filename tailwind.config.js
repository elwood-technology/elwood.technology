/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        },
      }),
      colors: {
        muted: {
          DEFAULT: 'hsl(var(--color-muted))',
        },
        array: {
          1: 'hsl(var(--color-arr-1))',
          2: 'hsl(var(--color-arr-2))',
          3: 'hsl(var(--color-arr-3))',
          4: 'hsl(var(--color-arr-4))',
          5: 'hsl(var(--color-arr-5))',
        },
      },
    },
  },
  plugins: [],
};
