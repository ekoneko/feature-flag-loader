const path = require('path');
const loaderPath = require.resolve('../..');
const rules = require('./rule');

module.exports = {
    entry: {
        index: ['index']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    resolve: {
        modules: [__dirname, path.resolve('../../node_modules')],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'raw-loader',
                    {
                        loader: loaderPath,
                        query: {
                            babelOptions: {
                                presets: ['react', 'es2015', 'stage-0'],
                                plugins: ['transform-decorators-legacy'],
                            },
                            rules,
                        },
                    },
                ],
            }
        ]
    },
}
