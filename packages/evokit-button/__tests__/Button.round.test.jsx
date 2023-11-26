import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Button } from '../src';

describe('<Button button-round="..." />', () => {
    it('props button-round', () => {
        const wrapper = shallow(<Button button-round='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_round_full"></button>');
    });

    it('extend 2 props button-round', () => {
        const wrapper = shallow(<Button button-round='xs xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<button class="ek-button ek-button_round-top-left_xs ek-button_round-bottom-right_xs ek-button_round-top-right_xl ek-button_round-bottom-left_xl"></button>'
        );
    });

    it('extend 3 props button-round', () => {
        const wrapper = shallow(<Button button-round='xs xl m' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<button class="ek-button ek-button_round-top-left_xs ek-button_round-top-right_xl ek-button_round-bottom-left_xl ek-button_round-bottom-right_m"></button>'
        );
    });

    it('extend 4 props button-round', () => {
        const wrapper = shallow(<Button button-round='s m l xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<button class="ek-button ek-button_round-top-left_s ek-button_round-top-right_m ek-button_round-bottom-right_l ek-button_round-bottom-left_xl"></button>'
        );
    });

    it('props button-round-top-left', () => {
        const wrapper = shallow(<Button button-round-top-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_round-top-left_full"></button>');
    });

    it('props button-round-top-right', () => {
        const wrapper = shallow(<Button button-round-top-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_round-top-right_full"></button>');
    });

    it('props button-round-bottom-left', () => {
        const wrapper = shallow(<Button button-round-bottom-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_round-bottom-left_full"></button>');
    });

    it('props button-round-bottom-right', () => {
        const wrapper = shallow(<Button button-round-bottom-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_round-bottom-right_full"></button>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(':root').exists()).toBeTruthy();
        expect(css.rule(':root').prop('--ek-button-round-xxs')).toBe('2px');
        expect(css.rule(':root').prop('--ek-button-round-xs')).toBe('4px');
        expect(css.rule(':root').prop('--ek-button-round-s')).toBe('6px');
        expect(css.rule(':root').prop('--ek-button-round-m')).toBe('8px');
        expect(css.rule(':root').prop('--ek-button-round-l')).toBe('10px');
        expect(css.rule(':root').prop('--ek-button-round-xl')).toBe('12px');
        expect(css.rule(':root').prop('--ek-button-round-xxl')).toBe('14px');
        expect(css.rule(':root').prop('--ek-button-round-3xl')).toBe('16px');
        expect(css.rule(':root').prop('--ek-button-round-4xl')).toBe('18px');
        expect(css.rule(':root').prop('--ek-button-round-5xl')).toBe('20px');
        expect(css.rule(':root').prop('--ek-button-round-full')).toBe('50%');

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

        expect(css.rule('.ek-button_round_none').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_s').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_m').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_l').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_5xl').exists()).toBeTruthy();
        expect(css.rule('.ek-button_round_full').exists()).toBeTruthy();
    });
});
