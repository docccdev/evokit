import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Button } from '../src';

describe('<Button button-width="..." />', () => {
    it('props button-width', () => {
        const wrapper = shallow(<Button button-width='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_width_value"></button>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-button_width_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-button_width_inherit').exists()).toBeTruthy();
        expect(css.rule('.ek-button_width_1-1').exists()).toBeTruthy();
    });
});
