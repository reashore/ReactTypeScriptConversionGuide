module.exports = {
  entry: './src/app.tsx',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx",  ".js", ".jsx"]
  },
  module: {
    rules: [
      //{ test: /\.jsx?$/, use: { loader: 'babel-loader' } }
      { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  devtool: "source-map"
}
