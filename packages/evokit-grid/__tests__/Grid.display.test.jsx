import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Grid } from '../src';

describe('<Grid grid-display="..." />', () => {
    it('props grid-display', () => {
        const wrapper = shallow(<Grid grid-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_display_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid_display_flex').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_display_none').exists()).toBeTruthy();
    });
});
