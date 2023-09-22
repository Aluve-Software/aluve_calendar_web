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
        'orange': '#FF5922',
      },
    
        borderRadius: {
          'rounded-border': '50px 50px 50px 50px !important'
        } 
      
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss'
  ],
}
