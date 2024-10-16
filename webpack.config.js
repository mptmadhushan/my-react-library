const path = require('path');

module.exports = {
    mode: 'production', // or 'development'
    entry: './src/index.js', // Adjust if your entry point is different
    output: {
        filename: 'index.js', // Output file name
        path: path.resolve(__dirname, 'dist'), // Output directory
        library: 'gcTestLibrary', // Name of your library
        libraryTarget: 'umd', // Universal Module Definition
        umdNamedDefine: true, // Name UMD module for AMD
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', // Enable source map generation
};
