import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-overflow="..." />', () => {
    it('props box-overflow', () => {
        const wrapper = shallow(<Box box-overflow='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_overflow_hidden"></div>');
    });

    it('extend 2 props box-overflow', () => {
        const wrapper = shallow(<Box box-overflow='scroll visible' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_overflow-x_scroll ek-box_overflow-y_visible"></div>');
    });

    it('props box-overflow-x', () => {
        const wrapper = shallow(<Box box-overflow-x='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_overflow-x_hidden"></div>');
    });

    it('props box-overflow-y', () => {
        const wrapper = shallow(<Box box-overflow-y='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_overflow-y_hidden"></div>');
    });
});
