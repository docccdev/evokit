import React from 'react';
import { shallow } from 'enzyme';
import { Flex } from '../src';

describe('<Flex flex-display="..." />', () => {
    it('props flex-display', () => {
        const wrapper = shallow(<Flex flex-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_display_value"></div>');
    });
});
