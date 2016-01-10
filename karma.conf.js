module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        // karma only needs to know about the test bundle
        files: [
            'test/tests.bundle.js'
        ],
        frameworks: ['chai', 'mocha'],
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack'
        ],
        // run the bundle through the webpack and sourcemap plugins
        preprocessors: {
            'test/tests.bundle.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        singleRun: true,
        // webpack config object
        //webpack: webpackConfig,
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'babel',
                        query: {
                            presets: ['react', 'es2015']
                        }
                    }
                ]
            }
        },
        webpackMiddleware: {
            noInfo: true
        }
    });
};