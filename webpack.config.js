const path = require("path");
const NodemonPlugin = require('nodemon-webpack-plugin');
const { webpack } = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  mode: "development", 
  entry: "./index.js", 
  output: {
      /** "path"
       * the folder path of the output file 
       */
      path: path.resolve(__dirname, "public"),
      /** "filename"
       * the name of the output file 
       */
      filename: "main.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    }),
    new NodemonPlugin(),
    // new webpack.HotModuleReplacementPlugin({
    //     multiStep: true
    //   }),
  ],
  target: "web",
    devServer: {
        historyApiFallback: true,
        /** "port" 
         * port of dev server
        */
        port: "8080",
        proxy: {
            '/': 'http://localhost:3000/',
        },
        /** "static" 
         * This property tells Webpack what static file it should serve
        */
        static: ["./public"],
        /** "open" 
         * opens the browser after server is successfully started
        */
        open: true,
        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only". 
         * "only" is used if enable Hot Module Replacement without page 
         * refresh as a fallback in case of build failures
         */
        hot: true ,
        /** "liveReload"
         * disable live reload on the browser. "hot" must be set to false for this to work
        */
        liveReload: true
    },
    resolve: {
        /** "extensions" 
         * If multiple files share the same name but have different extensions, webpack will 
         * resolve the one with the extension listed first in the array and skip the rest. 
         * This is what enables users to leave off the extension when importing
         */
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        /** "rules"
         * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx' 
         * file inside of a require()/import statement, use the babel-loader to transform it before you 
         * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from 
         * being searched"
         */
        rules: [
            {
                test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use:  {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                } 
            },
            {
                test: /.(css|scss)$/,
                exclude: [/node_modules/, /client\/scss\/modules/],
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
        ]
    }
}