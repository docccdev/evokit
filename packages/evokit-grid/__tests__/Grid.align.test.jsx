import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Grid } from '../src';

describe('<Grid grid-align="..." />', () => {
    it('props grid-align', () => {
        const wrapper = shallow(<Grid grid-align='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_align_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid_align_left').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_align_center').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_align_right').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_align_justify').exists()).toBeTruthy();
    });
});
