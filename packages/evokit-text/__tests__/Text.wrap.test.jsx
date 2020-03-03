import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Text } from '../src';

describe('<Text text-wrap="..." />', () => {
    it('props text-wrap', () => {
        const wrapper = shallow(<Text text-wrap='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_wrap_value"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-text_wrap_normal').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_nowrap').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_pre').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_pre-wrap').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_pre-line').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_break').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_ellipsis').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_two-line').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_three-line').exists()).toBeTruthy();

        expect(css.rule('.ek-text_wrap_two-line.ek-text_lheight_medium').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_two-line.ek-text_lheight_large').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_three-line.ek-text_lheight_medium').exists()).toBeTruthy();
        expect(css.rule('.ek-text_wrap_three-line.ek-text_lheight_large').exists()).toBeTruthy();
    });
});
