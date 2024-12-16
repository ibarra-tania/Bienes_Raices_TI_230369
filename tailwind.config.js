/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'], // Asegúrate de que las rutas estén bien configuradas
  theme: {
    extend: {
        colors:{
          black: '#000000',
          white: '#FFFFFF',
          babygray: '#CBC8C4',
          babyblue: '#96A7B6',
          darkblue: '#55738D'
        },
        fontFamily:{
          foco: ['Playwrite AU NSW Guides', 'serif'],
          rubi: ['Rubik', 'sans-serif']
        },
        transitionProperty: {
          height: 'height',
          spacing: 'margin, padding',
        },
        },
    },
    plugins: [],
  }  