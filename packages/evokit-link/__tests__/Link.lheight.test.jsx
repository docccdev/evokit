import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../src';

describe('<Link link-lheight="..." />', () => {
    it('props link-lheight', () => {
        const wrapper = shallow(<Link link-lheight='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_lheight_value"></a>');
    });
});
