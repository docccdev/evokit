import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box box-place="..." />', () => {
    it('props box-place', () => {
        const wrapper = shallow(<Box box-place='center' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_place_center"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_place_top').exists()).toBeTruthy();
        expect(css.rule('.ek-box_place_top-left').exists()).toBeTruthy();
        expect(css.rule('.ek-box_place_top-right').exists()).toBeTruthy();

        expect(css.rule('.ek-box_place_center').exists()).toBeTruthy();
        expect(css.rule('.ek-box_place_center-left').exists()).toBeTruthy();
        expect(css.rule('.ek-box_place_center-right').exists()).toBeTruthy();

        expect(css.rule('.ek-box_place_bottom').exists()).toBeTruthy();
        expect(css.rule('.ek-box_place_bottom-left').exists()).toBeTruthy();
        expect(css.rule('.ek-box_place_bottom-right').exists()).toBeTruthy();
    });
});
