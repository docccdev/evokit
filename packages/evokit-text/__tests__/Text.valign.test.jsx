import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text text-valign="..." />', () => {
    it('props text-valign', () => {
        const wrapper = shallow(<Text text-valign='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_valign_value"></span>');
    });
});
