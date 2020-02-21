import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Button } from '../src';

describe('<Button button-display="..." />', () => {
    it('props button-display', () => {
        const wrapper = shallow(<Button button-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_display_value"></button>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-button_display_inline-flex').exists()).toBeTruthy();
        expect(css.rule('.ek-button_display_none').exists()).toBeTruthy();
    });
});
