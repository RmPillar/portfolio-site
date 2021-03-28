const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-nested': {},
    autoprefixer: {},
  },
  // plugins: [
  //   require('postcss-import')({}),
  //   require('tailwindcss')('./tailwind.config.js'),
  //   require('autoprefixer'),
  // ],
};
