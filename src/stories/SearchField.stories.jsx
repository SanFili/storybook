import React from 'react';

import SearchField from '../Components/SearchField';

export default {
    title: 'Example/SearchField',
    component: SearchField,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
  
const Template = (args) => <SearchField {...args} />;

export const Active = Template.bind({});
Active.args = {
    active: true,
};
  
export const Disabled = Template.bind({});
Disabled.args = {
};
  
export const Large = Template.bind({});
Large.args = {
    size: 'large',
};
  
export const Small = Template.bind({});
Small.args = {
    size: 'small',
};