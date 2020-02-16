import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Text } from '../src';

describe('<Text text-valign="..." />', () => {
    it('props text-valign', () => {
        const wrapper = shallow(<Text text-valign='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_valign_value"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-text_valign_baseline').exists()).toBeTruthy();
        expect(css.rule('.ek-text_valign_bottom').exists()).toBeTruthy();
        expect(css.rule('.ek-text_valign_middle').exists()).toBeTruthy();
        expect(css.rule('.ek-text_valign_sub').exists()).toBeTruthy();
        expect(css.rule('.ek-text_valign_super').exists()).toBeTruthy();
        expect(css.rule('.ek-text_valign_text-bottom').exists()).toBeTruthy();
        expect(css.rule('.ek-text_valign_text-top').exists()).toBeTruthy();
        expect(css.rule('.ek-text_valign_top').exists()).toBeTruthy();
    });
});
