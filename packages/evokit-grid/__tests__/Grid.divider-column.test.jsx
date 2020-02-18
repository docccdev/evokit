import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Grid } from '../src';

describe('<Grid grid-divider-column="..." />', () => {
    it('props grid-divider-column', () => {
        const wrapper = shallow(<Grid grid-divider-column='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_divider-column_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid_divider-column_auto > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_expand > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_1 > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_2 > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_3 > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_4 > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_5 > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_6 > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_7 > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_8 > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_9 > .ek-grid__item').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_divider-column_10 > .ek-grid__item').exists()).toBeTruthy();
    });
});
