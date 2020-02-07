import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Grid } from '../src';

describe('<Grid grid-valign="..." />', () => {
    it('props grid-valign', () => {
        const wrapper = shallow(<Grid grid-valign='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_valign_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid_valign_top').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_valign_middle').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_valign_bottom').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_valign_baseline').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_valign_justify').exists()).toBeTruthy();
    });
});
