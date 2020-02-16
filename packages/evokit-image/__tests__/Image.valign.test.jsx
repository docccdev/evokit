import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Image } from '../src';

describe('<Image image-valign="..." />', () => {
    it('props image-valign', () => {
        const wrapper = shallow(<Image image-valign='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_valign_value"/>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_valign_baseline').exists()).toBeTruthy();
        expect(css.rule('.ek-image_valign_bottom').exists()).toBeTruthy();
        expect(css.rule('.ek-image_valign_middle').exists()).toBeTruthy();
        expect(css.rule('.ek-image_valign_sub').exists()).toBeTruthy();
        expect(css.rule('.ek-image_valign_super').exists()).toBeTruthy();
        expect(css.rule('.ek-image_valign_text-bottom').exists()).toBeTruthy();
        expect(css.rule('.ek-image_valign_text-top').exists()).toBeTruthy();
        expect(css.rule('.ek-image_valign_top').exists()).toBeTruthy();
    });
});
