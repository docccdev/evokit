import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../theme.css';
import { Button } from '../src';

describe('<Button button-theme="..." />', () => {
    it('props button-theme', () => {
        const wrapper = shallow(<Button button-theme='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_theme_value"></button>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-button_theme_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-button_theme_TEMPLATE_NAME:focus').exists()).toBeTruthy();
        expect(css.rule('.ek-button_theme_TEMPLATE_NAME:hover').exists()).toBeTruthy();
        expect(css.rule('.ek-button_theme_TEMPLATE_NAME:active').exists()).toBeTruthy();
        expect(css.rule('.ek-button_theme_TEMPLATE_NAME:disabled').exists()).toBeTruthy();
    });
});
