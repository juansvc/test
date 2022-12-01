import React from 'react';

import { Meta,Story } from '@storybook/react';
import { ThemeProvider } from '@zenprojects/ndp-design-system';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story = () => (
  <ThemeProvider>
    <Button />
  </ThemeProvider>
);

export const Primary = Template.bind({});
