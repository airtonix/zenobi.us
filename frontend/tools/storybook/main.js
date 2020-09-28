const convertPathsToAliases = require('convert-tsconfig-paths-to-webpack-aliases').default
const { set, get, flow, merge } = require('lodash')
const ReactStaticPluginSvg = require('react-static-plugin-svg').default

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
        const configurator = ReactStaticPluginSvg().webpack
        config.module.rules = [{ oneOf: config.module.rules }]
        return configurator(config)
      }
    ])(StorybookWebpackConfig)
  }
}
