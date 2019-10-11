import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-position="..." />', () => {
    it('props box-position', () => {
        const wrapper = shallow(<Box box-position='absolute' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_position_absolute"></div>');
    });
});
