import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Body } from '../src';

describe('<Body body-width="..." />', () => {
    it('props body-width', () => {
        const wrapper = shallow(<Body body-width='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_width_value"></body>');
    });

    it('extend 2 props body-width', () => {
        const wrapper = shallow(<Body body-width='value1 value2' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_width-min_value1 ek-body_width-max_value2"></body>');
    });

    it('props body-width-min', () => {
        const wrapper = shallow(<Body body-width-min='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_width-min_value"></body>');
    });

    it('props body-width-max', () => {
        const wrapper = shallow(<Body body-width-max='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_width-max_value"></body>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-body_width_none').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_none .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_xxs .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_xs .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_s').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_s .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_m').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_m .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_l').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_l .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_xxl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_3xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_4xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_5xl').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width_5xl .ek-body__section').exists()).toBeTruthy();

        expect(css.rule('.ek-body_width-min_none').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_none .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_xxs .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_xs .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_s').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_s .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_m').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_m .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_l').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_l .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_xxl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_3xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_4xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_5xl').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-min_5xl .ek-body__section').exists()).toBeTruthy();

        expect(css.rule('.ek-body_width-max_none').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_none .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-max_xxs').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_xxs .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-max_xs').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_xs .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-max_s').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_s .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-max_m').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_m .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-max_l').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_l .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-max_xl').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-max_xxl').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_xxl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-max_3xl').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_3xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-max_4xl').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_4xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_width-max_5xl').exists()).toBeFalsy();
        expect(css.rule('.ek-body_width-max_5xl .ek-body__section').exists()).toBeTruthy();
    });
});
