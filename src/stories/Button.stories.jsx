import React from 'react';

import Button from '../Components/Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    active: true,
    label: 'Клик',
    onClick: () => {},
};