import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
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

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_overflow_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-box_overflow_hidden').exists()).toBeTruthy();
        expect(css.rule('.ek-box_overflow_scroll').exists()).toBeTruthy();
        expect(css.rule('.ek-box_overflow_visible').exists()).toBeTruthy();

        expect(css.rule('.ek-box_overflow-x_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-box_overflow-x_hidden').exists()).toBeTruthy();
        expect(css.rule('.ek-box_overflow-x_scroll').exists()).toBeTruthy();
        expect(css.rule('.ek-box_overflow-x_visible').exists()).toBeTruthy();

        expect(css.rule('.ek-box_overflow-y_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-box_overflow-y_hidden').exists()).toBeTruthy();
        expect(css.rule('.ek-box_overflow-y_scroll').exists()).toBeTruthy();
        expect(css.rule('.ek-box_overflow-y_visible').exists()).toBeTruthy();
    });
});
