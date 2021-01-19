const path = require('path')
const { getWebpackAliasPaths } = require('../paths.config')
const pathToInlineSvg = path.resolve(__dirname, '../src/images')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...getWebpackAliasPaths(),
    }

    // modify storybook's file-loader rule to avoid conflicts with svgr
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToInlineSvg;


    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'file-loader'],
    });

    return config;
  },
};
