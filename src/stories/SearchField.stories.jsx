import React from 'react';

import SearchField from '../Components/SearchField';

export default {
    title: 'Example/SearchField',
    component: SearchField,
};
  
const Template = (args) => <SearchField {...args} />;

export const Default = Template.bind({});

Default.args = {
    size: 'medium',
    activeButton: true,
    activeInput: true,
    labelButton: 'Искать',
    placeholder: 'Введите запрос'
};