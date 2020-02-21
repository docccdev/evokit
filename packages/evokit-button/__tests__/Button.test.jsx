import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Button } from '../src';

describe('<Button />', () => {
    it('render', () => {
        const wrapper = shallow(<Button />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button"></button>');
    });

    it('props className', () => {
        const wrapper = shallow(<Button className='ololo' />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ololo"></button>');
    });

    it('props button-as', () => {
        const wrapper = shallow(<Button button-as='span' />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-button"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(':root').exists()).toBeTruthy();
        expect(css.rule(':root').prop('--ek-button-border-radius')).toBe('2px');
        expect(css.rule(':root').prop('--ek-button-border-width')).toBe('1px');
        expect(css.rule(':root').prop('--ek-button-font-size')).toBe('inherit');
        expect(css.rule(':root').prop('--ek-button-font-weight')).toBe('bold');
        expect(css.rule(':root').prop('--ek-button-line-height')).toBe('1em');
        expect(css.rule(':root').prop('--ek-button-padding')).toBe('10px 15px');
        expect(css.rule(':root').prop('--ek-button-transition')).toBe('150ms ease-in-out');

        expect(css.rule('.ek-button').exists()).toBeTruthy();
    });
});
