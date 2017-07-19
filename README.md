feature flag loader module for webpack

## install

npm i -D feat-flag-loader

PS: You need install babel's presets & plugins manually

## how to use

```
rules: [
    {
        test: /\.jsx?$/,
        use: [
            {
                loader: 'feat-flag-loader',
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
```
