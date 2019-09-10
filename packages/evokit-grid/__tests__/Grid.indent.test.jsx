import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../src';

describe('<Grid grid-indent="..." />', () => {
    it('props grid-indent', () => {
        const wrapper = shallow(<Grid grid-indent='xs' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_indent_xs"></div>');
    });

    it('extend 2 props grid-indent', () => {
        const wrapper = shallow(<Grid grid-indent='xs xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_indent-x_xs ek-grid_indent-y_xl"></div>');
    });

    it('props grid-indent-x', () => {
        const wrapper = shallow(<Grid grid-indent-x='xs' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_indent-x_xs"></div>');
    });

    it('props grid-indent-y', () => {
        const wrapper = shallow(<Grid grid-indent-y='xs' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_indent-y_xs"></div>');
    });
});
