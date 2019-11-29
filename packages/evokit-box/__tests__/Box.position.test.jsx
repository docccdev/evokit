import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-position="..." />', () => {
    it('props box-position', () => {
        const wrapper = shallow(<Box box-position='absolute' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_position_absolute"></div>');
    });

    it('extend 2 props box-position', () => {
        const wrapper = shallow(<Box box-position='absolute center' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_position_absolute ek-box_place_center"></div>'
        );
    });

    it('extend 3 props box-position', () => {
        const wrapper = shallow(<Box box-position='absolute center xs' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_position_absolute ek-box_place_center ek-box_zindex_xs"></div>'
        );
    });
});
