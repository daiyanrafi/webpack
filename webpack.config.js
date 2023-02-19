var path = require("path");

// module.exports = {
//     mode: 'development',
//     entry: './src/app.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundleRaf.js',
//       },
// }

module.exports = {
  mode: "development",
  // entry: ['./src/app.js', './src/home.js'],
  entry: {
    app: "./src/app.js",
    home: "./src/home.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

//entry porint
//arrey base
//object base

//3 modes
//devlopment
//production
//testing
