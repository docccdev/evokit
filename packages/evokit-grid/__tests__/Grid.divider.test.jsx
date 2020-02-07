import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../theme.css';
import { Grid } from '../src';

describe('<Grid grid-divider="..." />', () => {
    it('props grid-divider', () => {
        const wrapper = shallow(<Grid grid-divider='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_divider_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid_divider_TEMPLATE_NAME > .ek-grid__item').exists()).toBeTruthy();
    });
});
