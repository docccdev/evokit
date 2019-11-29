import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-zindex="..." />', () => {
    it('props box-zindex', () => {
        const wrapper = shallow(<Box box-zindex='xs' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_zindex_xs"></div>');
    });
});
