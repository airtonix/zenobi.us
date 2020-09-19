const convertPathsToAliases = require('convert-tsconfig-paths-to-webpack-aliases').default
const { set, get } = require('lodash')

module.exports = {
  'stories': [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        }
      }
    },
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config, { configType }) => {
    set(config, 'resolve.alias', {
      ...get(config, 'resolve.alias', {}),
      ...convertPathsToAliases(require(`${process.cwd()}/tsconfig.json`))
    })
    return config
  }
}