import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text text-weight="..." />', () => {
    it('props text-weight', () => {
        const wrapper = shallow(<Text text-weight='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_weight_value"></span>');
    });
});
