
const path = require('path');
const fs = require('fs');
const prebuild = require('pre-build-webpack');
const sass = require('node-sass');

const plugins = [
  new prebuild(() => {
    try {
      fs.mkdirSync(path.resolve('./dist'));
    }
    catch(x) {}
  }),
  new prebuild(() => {
    const cpArgs = [
      '-r',
      path.resolve('./app/index.html'),
      path.resolve('./dist')
    ];
    require('child_process').execFile('cp', cpArgs);
  }),
  new prebuild(() => {
    const { css } = sass.renderSync({
      file: path.resolve('./app/app.scss')
    });
    fs.writeFileSync(path.resolve('./dist/app.css'), css);
  })
];

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve('./dist/'),
    filename: 'bundle.js'
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './app')]
      }
    ]
  }
};
