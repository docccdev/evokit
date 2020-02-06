import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
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

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid_indent_none').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_s').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_m').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_l').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_none > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xxs > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xs > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_s > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_m > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_l > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xxl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_3xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_4xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_5xl > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent-x_none').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_s').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_m').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_l').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent-x_none > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_xxs > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_xs > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_s > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_m > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_l > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_xxl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_3xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_4xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-x_5xl > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent-y_none').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_s').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_m').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_l').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent-y_none > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_xxs > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_xs > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_s > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_m > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_l > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_xxl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_3xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_4xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent-y_5xl > .ek-grid__item').exists()).toBeTruthy();
    });
});
