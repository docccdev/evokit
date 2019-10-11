import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../src';

describe('<Link link-size="..." />', () => {
    it('props link-size', () => {
        const wrapper = shallow(<Link link-size='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_size_value"></a>');
    });
});
