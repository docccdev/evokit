import React from 'react';
import { shallow } from 'enzyme';
import { Flex } from '../src';

describe('<Flex flex-items="..." />', () => {
    it('props flex-items', () => {
        const wrapper = shallow(<Flex flex-items='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_items_value"></div>');
    });
});
