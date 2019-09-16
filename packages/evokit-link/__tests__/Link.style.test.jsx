import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../src';

describe('<Link link-style="..." />', () => {
    it('props link-style', () => {
        const wrapper = shallow(<Link link-style='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_style_value"></a>');
    });
});
