import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Grid } from '../src';

describe('<Grid grid-wrap="..." />', () => {
    it('props grid-wrap', () => {
        const wrapper = shallow(<Grid grid-wrap='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_wrap_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid_wrap_wrap').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_wrap_nowrap').exists()).toBeTruthy();
        expect(css.rule('.ek-grid_wrap_wrap-reverse').exists()).toBeTruthy();
    });
});
