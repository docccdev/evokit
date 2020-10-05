import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box box-position="..." />', () => {
    it('props box-position', () => {
        const wrapper = shallow(<Box box-position='absolute' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_position_absolute"></div>');
    });

    it('extend 2 props box-position', () => {
        const wrapper = shallow(<Box box-position='absolute center' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_position_absolute ek-box_place_center"></div>'
        );
    });

    it('extend 3 props box-position', () => {
        const wrapper = shallow(<Box box-position='absolute center xs' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_position_absolute ek-box_place_center ek-box_zindex_xs"></div>'
        );
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_position_static').exists()).toBeTruthy();
        expect(css.rule('.ek-box_position_relative').exists()).toBeTruthy();
        expect(css.rule('.ek-box_position_absolute').exists()).toBeTruthy();
        expect(css.rule('.ek-box_position_fixed').exists()).toBeTruthy();
        expect(css.rule('.ek-box_position_sticky').exists()).toBeTruthy();
    });
});
