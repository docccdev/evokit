import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Text } from '../src';

describe('<Text text-align="..." />', () => {
    it('props text-align', () => {
        const wrapper = shallow(<Text text-align='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_align_value"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-text_align_left').exists()).toBeTruthy();
        expect(css.rule('.ek-text_align_center').exists()).toBeTruthy();
        expect(css.rule('.ek-text_align_right').exists()).toBeTruthy();
        expect(css.rule('.ek-text_align_justify').exists()).toBeTruthy();
    });
});
