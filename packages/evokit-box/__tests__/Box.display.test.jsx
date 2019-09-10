import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-display="..." />', () => {
    it('props box-display', () => {
        const wrapper = shallow(<Box box-display='inline-block' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_display_inline-block"></div>');
    });
});
