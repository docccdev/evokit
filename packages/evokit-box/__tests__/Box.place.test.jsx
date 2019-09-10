import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-place="..." />', () => {
    it('props box-place', () => {
        const wrapper = shallow(<Box box-place='center' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_place_center"></div>');
    });
});
