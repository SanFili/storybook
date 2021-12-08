import React from 'react';

import Input from '../Components/Input';

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
  
const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
