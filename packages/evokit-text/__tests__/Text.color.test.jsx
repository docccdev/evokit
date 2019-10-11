import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text text-color="..." />', () => {
    it('props text-color', () => {
        const wrapper = shallow(<Text text-color='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_color_value"></span>');
    });
});
