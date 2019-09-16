import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../src';

describe('<Link link-display="..." />', () => {
    it('props link-display', () => {
        const wrapper = shallow(<Link link-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_display_value"></a>');
    });
});
