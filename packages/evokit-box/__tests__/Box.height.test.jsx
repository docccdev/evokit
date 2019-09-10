import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-height="..." />', () => {
    it('props box-height', () => {
        const wrapper = shallow(<Box box-height='1-1' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_height_1-1"></div>');
    });
});
