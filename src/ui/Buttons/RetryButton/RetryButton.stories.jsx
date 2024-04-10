import React from 'react';
import { action } from '@storybook/addon-actions';
import { RetryButton } from './index'

export default {
    title: 'RetryButton',
    component: RetryButton,
};

const Template = (args) => <RetryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    resetErrorBoundary: action('resetErrorBoundary'),
};