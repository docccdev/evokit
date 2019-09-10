import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-width="..." />', () => {
    it('props box-width', () => {
        const wrapper = shallow(<Box box-width='1-7' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_width_1-7"></div>');
    });
});
