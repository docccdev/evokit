import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-opacity="..." />', () => {
    it('props box-opacity', () => {
        const wrapper = shallow(<Box box-opacity='100' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_opacity_100"></div>');
    });
});
