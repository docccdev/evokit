import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Grid } from '../src';

describe('<Grid grid-height="..." />', () => {
    it('props grid-height', () => {
        const wrapper = shallow(<Grid grid-height='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_height_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid_height_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_height_inherit').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_height_1-1').exists()).toBeTruthy();
    });
});
