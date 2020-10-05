import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box box-opacity="..." />', () => {
    it('props box-opacity', () => {
        const wrapper = shallow(<Box box-opacity='100' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_opacity_100"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_opacity_0').exists()).toBeTruthy();
        expect(css.rule('.ek-box_opacity_10').exists()).toBeTruthy();
        expect(css.rule('.ek-box_opacity_20').exists()).toBeTruthy();
        expect(css.rule('.ek-box_opacity_30').exists()).toBeTruthy();
        expect(css.rule('.ek-box_opacity_40').exists()).toBeTruthy();
        expect(css.rule('.ek-box_opacity_50').exists()).toBeTruthy();
        expect(css.rule('.ek-box_opacity_60').exists()).toBeTruthy();
        expect(css.rule('.ek-box_opacity_70').exists()).toBeTruthy();
        expect(css.rule('.ek-box_opacity_80').exists()).toBeTruthy();
        expect(css.rule('.ek-box_opacity_90').exists()).toBeTruthy();
        expect(css.rule('.ek-box_opacity_100').exists()).toBeTruthy();
    });
});
