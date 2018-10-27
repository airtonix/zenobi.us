const Config = require('webpack-config').default;

module.exports = new Config()
    .merge({
        module: {
            rules: [
                {
                    test: /\.mdx?$/,
                    use: [
                        {loader: 'babel-loader'},
                        {loader: 'mdx-loader', options: {
                            mdPlugins: [
                                require('remark-highlight.js'),
                                require('remark-mermaid'),
                                require('remark-emoji')
                            ]
                        }},
                    ]
                }
            ]
        }
    });
