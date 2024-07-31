/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'yashil':"rgb(36, 105, 36);",
        'sariq':"rgb(245, 204, 101);",
        'kulrang':"#dedddd",
        'sariq':"rgb(245, 204, 101);",
        'qora':"rgb(0, 0, 0)",
        'qoraroq':"#222",
        'libg':"rgb(29, 60, 64)"
      },
      backgroundImage: {
        'hero-pattern': "url('../img/rasm.png')",
      }
      

    },
  },
  plugins: [],
}
