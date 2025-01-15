/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/pages/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '264px', // Nuevo punto de quiebre para pantallas pequeñas
        'sm': '640px', 
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
  
}

