import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../src';

describe('<Link link-valign="..." />', () => {
    it('props link-valign', () => {
        const wrapper = shallow(<Link link-valign='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_valign_value"></a>');
    });
});
