import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text text-style="..." />', () => {
    it('props text-style', () => {
        const wrapper = shallow(<Text text-style='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_style_value"></span>');
    });
});
