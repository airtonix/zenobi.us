const convertPathsToAliases = require('convert-tsconfig-paths-to-webpack-aliases').default
const { set, get, flow } = require('lodash')

module.exports = {
  'stories': [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/preset-scss',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (StorybookWebpackConfig) => {
    return flow([
      // layer the tsconfig paths
      (config) => {
        set(config, 'resolve.alias', {
          ...get(config, 'resolve.alias', {}),
          ...convertPathsToAliases(require(`${process.cwd()}/tsconfig.json`))
        })
        return config
      },
      // inject the svgr
      (config) => {
        config.module.rules.unshift({
          test: /\.svg$/,
          use: [{
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },
            },
          }, 'url-loader'],
        })
        return config
      }
    ])(StorybookWebpackConfig)
  }
}
