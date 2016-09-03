module.exports = {
  entry: {
    app: ["./src/index.tsx"]
  },
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "bundle.js",
    libraryTarget: 'var',
    library: 'MapGL'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "redux": "Redux"
  }
};