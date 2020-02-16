import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Text } from '../src';

describe('<Text text-style="..." />', () => {
    it('props text-style', () => {
        const wrapper = shallow(<Text text-style='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_style_value"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-text_style_italic').exists()).toBeTruthy();
        expect(css.rule('.ek-text_style_strike').exists()).toBeTruthy();
        expect(css.rule('.ek-text_style_underline').exists()).toBeTruthy();
        expect(css.rule('.ek-text_style_overline').exists()).toBeTruthy();
    });
});
