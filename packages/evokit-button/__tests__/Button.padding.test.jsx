import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Button } from '../src';

describe('<Button button-padding="..." />', () => {
    it('props button-padding', () => {
        const wrapper = shallow(<Button button-padding='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_padding_xxl"></button>');
    });

    it('extend 2 props button-padding', () => {
        const wrapper = shallow(<Button button-padding='xs xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<button class="ek-button ek-button_padding-top_xs ek-button_padding-bottom_xs ek-button_padding-right_xl ek-button_padding-left_xl"></button>'
        );
    });

    it('extend 3 props button-padding', () => {
        const wrapper = shallow(<Button button-padding='xs xl m' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<button class="ek-button ek-button_padding-top_xs ek-button_padding-right_xl ek-button_padding-left_xl ek-button_padding-bottom_m"></button>'
        );
    });

    it('extend 4 props button-padding', () => {
        const wrapper = shallow(<Button button-padding='s m l xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<button class="ek-button ek-button_padding-top_s ek-button_padding-right_m ek-button_padding-bottom_l ek-button_padding-left_xl"></button>'
        );
    });

    it('props button-padding-top', () => {
        const wrapper = shallow(<Button button-padding-top='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_padding-top_xxl"></button>');
    });

    it('props button-padding-right', () => {
        const wrapper = shallow(<Button button-padding-right='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_padding-right_xxl"></button>');
    });

    it('props button-padding-bottom', () => {
        const wrapper = shallow(<Button button-padding-bottom='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_padding-bottom_xxl"></button>');
    });

    it('props button-padding-left', () => {
        const wrapper = shallow(<Button button-padding-left='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_padding-left_xxl"></button>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(':root').exists()).toBeTruthy();
        expect(css.rule(':root').prop('--ek-button-indent-xxs')).toBe('5px');
        expect(css.rule(':root').prop('--ek-button-indent-xs')).toBe('10px');
        expect(css.rule(':root').prop('--ek-button-indent-s')).toBe('15px');
        expect(css.rule(':root').prop('--ek-button-indent-m')).toBe('20px');
        expect(css.rule(':root').prop('--ek-button-indent-l')).toBe('25px');
        expect(css.rule(':root').prop('--ek-button-indent-xl')).toBe('30px');
        expect(css.rule(':root').prop('--ek-button-indent-xxl')).toBe('35px');
        expect(css.rule(':root').prop('--ek-button-indent-3xl')).toBe('40px');
        expect(css.rule(':root').prop('--ek-button-indent-4xl')).toBe('45px');
        expect(css.rule(':root').prop('--ek-button-indent-5xl')).toBe('50px');

        expect(css.rule('.ek-button_padding_none').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding_s').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding_m').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding_l').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-button_padding-top_none').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-top_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-top_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-top_s').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-top_m').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-top_l').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-top_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-top_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-top_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-top_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-top_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-button_padding-right_none').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-right_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-right_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-right_s').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-right_m').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-right_l').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-right_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-right_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-right_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-right_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-right_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-button_padding-bottom_none').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-bottom_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-bottom_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-bottom_s').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-bottom_m').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-bottom_l').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-bottom_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-bottom_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-bottom_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-bottom_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-bottom_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-button_padding-left_none').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-left_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-left_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-left_s').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-left_m').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-left_l').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-left_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-left_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-left_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-left_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_padding-left_5xl').exists()).toBeTruthy();
    });
});
