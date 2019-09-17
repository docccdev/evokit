import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text text-size="..." />', () => {
    it('props text-size', () => {
        const wrapper = shallow(<Text text-size='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_size_value"></span>');
    });
});
