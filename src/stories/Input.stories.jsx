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

export const Disabled = Template.bind({});
Disabled.args = {
    active: false,
};
  
export const Active = Template.bind({});
Active.args = {
    active: true,
};
  
export const Large = Template.bind({});
Large.args = {
    size: 'large',
};
  
export const Small = Template.bind({});
Small.args = {
    size: 'small',
};