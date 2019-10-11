import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text text-display="..." />', () => {
    it('props text-display', () => {
        const wrapper = shallow(<Text text-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_display_value"></span>');
    });
});
