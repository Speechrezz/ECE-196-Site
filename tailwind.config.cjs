/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'base-1':    '#171823',
        'neutral-1': '#CFD9E2',
        'accent-1':  '#998BF0',
        'text-1' :   '#102B3E'
      },
      // backgroundImage: {
      //   'hero-image': "url('/img/hero-pattern.svg')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // }
    },
  },
  plugins: [],
}
