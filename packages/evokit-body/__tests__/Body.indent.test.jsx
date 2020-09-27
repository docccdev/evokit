import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Body } from '../src';

describe('<Body body-indent="..." />', () => {
    it('props body-indent', () => {
        const wrapper = shallow(<Body body-indent='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_indent_value"></body>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-body_indent_none .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_indent_xxs .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_indent_xs .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_indent_s .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_indent_m .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_indent_l .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_indent_xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_indent_xxl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_indent_3xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_indent_4xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_indent_5xl .ek-body__section').exists()).toBeTruthy();
    });
});
