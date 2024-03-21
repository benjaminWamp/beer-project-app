/** @type {import('tailwindcss').Config} */
export default {
  content :['./resources/**/*.blade.php'],
  theme: {
    extend: {
      colors: {
        primary: '#715315',
        secondary: '#F8E7BC',
        accent: '#514339',
        background: '#eee',
      }
    },
    fontFamily: {
      'sans': ['Nunito', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'title': ['QTGraveure', 'serif'],
    },
  },
  plugins: [],
}

