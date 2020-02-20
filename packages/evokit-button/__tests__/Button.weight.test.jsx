import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Button } from '../src';

describe('<Button button-weight="..." />', () => {
    it('props button-weight', () => {
        const wrapper = shallow(<Button button-weight='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_weight_value"></button>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-button_weight_thin').exists()).toBeTruthy();
        expect(css.rule('.ek-button_weight_light').exists()).toBeTruthy();
        expect(css.rule('.ek-button_weight_normal').exists()).toBeTruthy();
        expect(css.rule('.ek-button_weight_medium').exists()).toBeTruthy();
        expect(css.rule('.ek-button_weight_bold').exists()).toBeTruthy();
        expect(css.rule('.ek-button_weight_black').exists()).toBeTruthy();
    });
});
