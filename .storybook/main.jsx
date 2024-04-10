let postcssLoaderOptions
;(async () => {
  postcssLoaderOptions = {
    implementation: await import('postcss'),
  }
})()

const config = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions,
      },
    },
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDirs: ['../public'],
}

export default config
