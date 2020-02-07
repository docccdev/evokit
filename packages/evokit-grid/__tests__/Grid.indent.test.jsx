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
        expect(css.rule('.ek-grid_indent_none > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_none[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_none[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xxs > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xxs[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xxs[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xs > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xs[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xs[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_s').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_s > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_s[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_s[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_m').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_m > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_m[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_m[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_l').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_l > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_l[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_l[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xl[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xl[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xxl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xxl[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_xxl[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_3xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_3xl[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_3xl[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_4xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_4xl[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_4xl[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();

        expect(css.rule('.ek-grid_indent_5xl').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_5xl > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_5xl[class*="ek-grid_divider"]').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_indent_5xl[class*="ek-grid_divider"] > .ek-grid__item').exists()).toBeTruthy();
    });
});
