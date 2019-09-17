import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text text-align="..." />', () => {
    it('props text-align', () => {
        const wrapper = shallow(<Text text-align='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_align_value"></span>');
    });
});
