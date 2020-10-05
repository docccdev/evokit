import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Image } from '../src';

describe('<Image />', () => {
    it('render', () => {
        const wrapper = shallow(<Image src='test.jpg' alt='test alt' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img src="test.jpg" alt="test alt" class="ek-image"/>');
    });

    it('props className', () => {
        const wrapper = shallow(<Image className='ololo' src='' alt='' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img src="" alt="" class="ek-image ololo"/>');
    });

    it('props image-tag', () => {
        const wrapper = shallow(<Image image-tag='span' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-image"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(':root').exists()).toBeTruthy();

        expect(css.rule(':root').prop('--ek-image-round-xxs')).toBe('2px');
        expect(css.rule(':root').prop('--ek-image-round-xs')).toBe('4px');
        expect(css.rule(':root').prop('--ek-image-round-s')).toBe('6px');
        expect(css.rule(':root').prop('--ek-image-round-m')).toBe('8px');
        expect(css.rule(':root').prop('--ek-image-round-l')).toBe('10px');
        expect(css.rule(':root').prop('--ek-image-round-xl')).toBe('12px');
        expect(css.rule(':root').prop('--ek-image-round-xxl')).toBe('14px');
        expect(css.rule(':root').prop('--ek-image-round-3xl')).toBe('16px');
        expect(css.rule(':root').prop('--ek-image-round-4xl')).toBe('18px');
        expect(css.rule(':root').prop('--ek-image-round-5xl')).toBe('20px');

        expect(css.rule('.ek-image').exists()).toBeTruthy();
        expect(css.rule('.ek-image[alt]').exists()).toBeTruthy();
    });
});
