import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../src';

describe('<Link link-color="..." />', () => {
    it('props link-color', () => {
        const wrapper = shallow(<Link link-color='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_color_value"></a>');
    });
});
