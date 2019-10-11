import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../src';

describe('<Link link-weight="..." />', () => {
    it('props link-weight', () => {
        const wrapper = shallow(<Link link-weight='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_weight_value"></a>');
    });
});
