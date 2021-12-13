const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'hullaballoo.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
