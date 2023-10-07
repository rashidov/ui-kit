/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  webpackFinal: (config) => {
    config.resolve.modules = [...config.resolve.modules || [], './src']
    // for svg and url-loaders
    // config.module.rules = [...(config.module.rules || []), {
    //   test: /\.svg$i/,
    //   type: 'javascript/auto',
    //   use: [{  }]
    // }]
    return config
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
