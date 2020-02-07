import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Grid } from '../src';

describe('<Grid grid-direction="..." />', () => {
    it('props grid-direction', () => {
        const wrapper = shallow(<Grid grid-direction='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_direction_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid_direction_row').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_direction_row-reverse').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_direction_column').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_direction_column-reverse').exists()).toBeTruthy();
    });
});
