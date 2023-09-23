/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'lilac': '#D6B9ED',
        'dark-blue': '#140E48',
        'light-blue': '#369FF7',
        'bright-orange': '#FF5922 !important',
      },
      textColor: {
        'lilac': '#D6B9ED',
        'dark-blue': '#140E48',
        'light-blue': '#369FF7',
        'bright-orange': '#FF5922 !important',
        'grey': '#313037',
        'light-grey': '#838295'
      },
      borderColor: {
        'lilac': '#D6B9ED',
        'dark-blue': '#140E48',
        'light-blue': '#369FF7',
        'bright-orange': '#FF5922 !important',
        'grey': '#313037',
        'light-grey': '#838295'
      },
      borderRadius: {
        'rounded-border': '50px 50px 50px 50px !important'
      },
      fontFamily: {
        'space-mono': 'Space Mono'
      }
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss'
  ],
}
