const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js",
        publicPath: "/"  // 🔹 Important for React Router to handle routes properly
    },

    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    // 🔹 Add this devServer configuration
    devServer: {
        historyApiFallback: true, // 🔹 Ensures React Router handles routes correctly
        hot: true,  // Enables Hot Module Replacement
        open: true, // Opens the browser automatically
        port: 8080  // Specify the port (you can change it if needed)
    }
};
