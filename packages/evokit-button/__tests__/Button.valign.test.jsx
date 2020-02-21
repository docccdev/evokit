import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Button } from '../src';

describe('<Button button-valign="..." />', () => {
    it('props button-valign', () => {
        const wrapper = shallow(<Button button-valign='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_valign_value"></button>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-button_valign_baseline').exists()).toBeTruthy();
        expect(css.rule('.ek-button_valign_bottom').exists()).toBeTruthy();
        expect(css.rule('.ek-button_valign_middle').exists()).toBeTruthy();
        expect(css.rule('.ek-button_valign_sub').exists()).toBeTruthy();
        expect(css.rule('.ek-button_valign_super').exists()).toBeTruthy();
        expect(css.rule('.ek-button_valign_text-bottom').exists()).toBeTruthy();
        expect(css.rule('.ek-button_valign_text-top').exists()).toBeTruthy();
        expect(css.rule('.ek-button_valign_top').exists()).toBeTruthy();
    });
});
