import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-align="..." />', () => {
    it('props box-align', () => {
        const wrapper = shallow(<Box box-align='left' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_align_left"></div>');
    });
});
