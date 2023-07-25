import type { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;