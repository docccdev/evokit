import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box />', () => {
    it('render', () => {
        const wrapper = shallow(<Box />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box"></div>');
    });

    it('props className', () => {
        const wrapper = shallow(<Box className='ololo' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ololo"></div>');
    });

    it('props box-tag', () => {
        const wrapper = shallow(<Box box-tag='span' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-box"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(':root').exists()).toBeTruthy();
        expect(css.rule(':root').prop('--ek-box-indent-xxs')).toBe('5px');
        expect(css.rule(':root').prop('--ek-box-indent-xs')).toBe('10px');
        expect(css.rule(':root').prop('--ek-box-indent-s')).toBe('15px');
        expect(css.rule(':root').prop('--ek-box-indent-m')).toBe('20px');
        expect(css.rule(':root').prop('--ek-box-indent-l')).toBe('25px');
        expect(css.rule(':root').prop('--ek-box-indent-xl')).toBe('30px');
        expect(css.rule(':root').prop('--ek-box-indent-xxl')).toBe('35px');
        expect(css.rule(':root').prop('--ek-box-indent-3xl')).toBe('40px');
        expect(css.rule(':root').prop('--ek-box-indent-4xl')).toBe('45px');
        expect(css.rule(':root').prop('--ek-box-indent-5xl')).toBe('50px');

        expect(css.rule(':root').prop('--ek-box-round-xxs')).toBe('2px');
        expect(css.rule(':root').prop('--ek-box-round-xs')).toBe('4px');
        expect(css.rule(':root').prop('--ek-box-round-s')).toBe('6px');
        expect(css.rule(':root').prop('--ek-box-round-m')).toBe('8px');
        expect(css.rule(':root').prop('--ek-box-round-l')).toBe('10px');
        expect(css.rule(':root').prop('--ek-box-round-xl')).toBe('12px');
        expect(css.rule(':root').prop('--ek-box-round-xxl')).toBe('14px');
        expect(css.rule(':root').prop('--ek-box-round-3xl')).toBe('16px');
        expect(css.rule(':root').prop('--ek-box-round-4xl')).toBe('18px');
        expect(css.rule(':root').prop('--ek-box-round-5xl')).toBe('20px');

        expect(css.rule(':root').prop('--ek-box-border-width-xxs')).toBe('1px');
        expect(css.rule(':root').prop('--ek-box-border-width-xs')).toBe('2px');
        expect(css.rule(':root').prop('--ek-box-border-width-s')).toBe('3px');
        expect(css.rule(':root').prop('--ek-box-border-width-m')).toBe('4px');
        expect(css.rule(':root').prop('--ek-box-border-width-l')).toBe('5px');
        expect(css.rule(':root').prop('--ek-box-border-width-xl')).toBe('6px');
        expect(css.rule(':root').prop('--ek-box-border-width-xxl')).toBe('7px');
        expect(css.rule(':root').prop('--ek-box-border-width-3xl')).toBe('8px');
        expect(css.rule(':root').prop('--ek-box-border-width-4xl')).toBe('9px');
        expect(css.rule(':root').prop('--ek-box-border-width-5xl')).toBe('10px');

        expect(css.rule(':root').prop('--ek-box-zindex-xxs')).toBe('5');
        expect(css.rule(':root').prop('--ek-box-zindex-xs')).toBe('10');
        expect(css.rule(':root').prop('--ek-box-zindex-s')).toBe('15');
        expect(css.rule(':root').prop('--ek-box-zindex-m')).toBe('20');
        expect(css.rule(':root').prop('--ek-box-zindex-l')).toBe('25');
        expect(css.rule(':root').prop('--ek-box-zindex-xl')).toBe('30');
        expect(css.rule(':root').prop('--ek-box-zindex-xxl')).toBe('35');
        expect(css.rule(':root').prop('--ek-box-zindex-3xl')).toBe('40');
        expect(css.rule(':root').prop('--ek-box-zindex-4xl')).toBe('45');
        expect(css.rule(':root').prop('--ek-box-zindex-5xl')).toBe('50');

        expect(css.rule('.ek-box').exists()).toBeTruthy();
        expect(css.rule('.ek-box:after').exists()).toBeTruthy();
        expect(css.rule('.ek-box:before').exists()).toBeTruthy();
    });
});
