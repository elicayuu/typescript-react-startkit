const path = require('path')
const { getWebpackAliasPaths } = require('../paths.config')

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

    config.module.rules.push({
      test: /\.tsx?$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        "babel-loader",
        {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
        "react-docgen-typescript-loader"
      ],
    });
  
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
