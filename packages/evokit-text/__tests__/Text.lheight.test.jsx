import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text text-lheight="..." />', () => {
    it('props text-lheight', () => {
        const wrapper = shallow(<Text text-lheight='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_lheight_value"></span>');
    });
});
