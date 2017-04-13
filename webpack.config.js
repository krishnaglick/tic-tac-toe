
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const prebuild = require('pre-build-webpack');
const sass = require('node-sass');

const APP_DIR = path.resolve(__dirname, './app');
const blackMagic = require('../redux-black-magic');
const ignores = new webpack.WatchIgnorePlugin([
  path.resolve(APP_DIR + '/actions/index.js'),
  path.resolve(APP_DIR + '/reducers/index.js')
]);

const plugins = [
  ignores,
  new prebuild(() => {
    try {
      fs.mkdirSync(path.resolve('./dist'));
    }
    catch(x) {}
  }),
  new blackMagic({
    actionsFolder: path.resolve(APP_DIR + '/actions/'),
    reducersFolder: path.resolve(APP_DIR + '/reducers/'),
    actionTemplate: path.resolve(APP_DIR + '/templates/actionTemplate.js'),
    reducerTemplate: path.resolve(APP_DIR + '/templates/reducerTemplate.js')
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
    path: './dist/',
    filename: 'bundle.js'
  },
  plugins,
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [path.resolve(__dirname, './app')]
    }]
  }
};
