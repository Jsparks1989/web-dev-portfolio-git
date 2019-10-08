const path = require('path');

module.exports = {
    //-- Where it starts.
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        //-- The output it creates.
        filename: 'bundle.js'
    },
    //-- How it bundles the code.
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        }]
    }
}