import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text text-wrap="..." />', () => {
    it('props text-wrap', () => {
        const wrapper = shallow(<Text text-wrap='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_wrap_value"></span>');
    });
});
