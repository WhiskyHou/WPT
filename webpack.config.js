const path = require('path')

module.exports = {
    entry:{
        app: __dirname + '/src/app.ts'
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'bundlets.js'
    }
}