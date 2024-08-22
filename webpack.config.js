module.exports = {
  entry: {
    index:`./assets/js/index.js`,
    about:`./assets/js/about.js`,
    works:`./assets/js/works.js`,
    detail:`./assets/js/detail.js`
  },
  mode: 'production',

  output: {
    path: `${__dirname}/assets/js`,
    filename:"[name]-min.js"
  },
};