/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    
  ],
  theme: {
    extend: {},
    
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '900px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1000px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}