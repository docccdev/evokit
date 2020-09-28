import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Body } from '../src';

describe('<Body body-overflow="..." />', () => {
    it('props body-overflow', () => {
        const wrapper = shallow(<Body body-overflow='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_overflow_hidden"></body>');
    });

    it('extend 2 props body-overflow', () => {
        const wrapper = shallow(<Body body-overflow='scroll visible' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_overflow-x_scroll ek-body_overflow-y_visible"></body>');
    });

    it('props body-overflow-x', () => {
        const wrapper = shallow(<Body body-overflow-x='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_overflow-x_hidden"></body>');
    });

    it('props body-overflow-y', () => {
        const wrapper = shallow(<Body body-overflow-y='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_overflow-y_hidden"></body>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-body_overflow_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-body_overflow_hidden').exists()).toBeTruthy();
        expect(css.rule('.ek-body_overflow_scroll').exists()).toBeTruthy();
        expect(css.rule('.ek-body_overflow_visible').exists()).toBeTruthy();

        expect(css.rule('.ek-body_overflow-x_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-body_overflow-x_hidden').exists()).toBeTruthy();
        expect(css.rule('.ek-body_overflow-x_scroll').exists()).toBeTruthy();
        expect(css.rule('.ek-body_overflow-x_visible').exists()).toBeTruthy();

        expect(css.rule('.ek-body_overflow-y_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-body_overflow-y_hidden').exists()).toBeTruthy();
        expect(css.rule('.ek-body_overflow-y_scroll').exists()).toBeTruthy();
        expect(css.rule('.ek-body_overflow-y_visible').exists()).toBeTruthy();
    });
});
