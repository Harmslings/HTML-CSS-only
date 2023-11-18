/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      container: {
        centre:true,
        padding: {
          DEFAULT:'20px',
          md:'50px'
        }
      }
    },
  },
  plugins: [],
}

