import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Button } from '../src';

describe('<Button button-height="..." />', () => {
    it('props button-height', () => {
        const wrapper = shallow(<Button button-height='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_height_value"></button>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-button_height_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-button_height_inherit').exists()).toBeTruthy();
        expect(css.rule('.ek-button_height_1-1').exists()).toBeTruthy();
    });
});
