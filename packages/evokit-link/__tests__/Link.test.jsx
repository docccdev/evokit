import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Link } from '../src';

describe('<Link />', () => {
    it('render', () => {
        const wrapper = shallow(<Link />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link"></a>');
    });

    it('props className', () => {
        const wrapper = shallow(<Link className='ololo' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ololo"></a>');
    });

    it('props link-tag', () => {
        const wrapper = shallow(<Link link-tag='span' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-link"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(':root').exists()).toBeTruthy();
        expect(css.rule(':root').prop('--ek-link-line-height')).toBe('1em');

        expect(css.rule(':root').prop('--ek-link-size-small')).toBe('11px');
        expect(css.rule(':root').prop('--ek-link-size-default')).toBe('13px');
        expect(css.rule(':root').prop('--ek-link-size-big')).toBe('15px');
        expect(css.rule(':root').prop('--ek-link-size-h1')).toBe('24px');
        expect(css.rule(':root').prop('--ek-link-size-h2')).toBe('22px');
        expect(css.rule(':root').prop('--ek-link-size-h3')).toBe('20px');
        expect(css.rule(':root').prop('--ek-link-size-h4')).toBe('18px');
        expect(css.rule(':root').prop('--ek-link-size-h5')).toBe('16px');
        expect(css.rule(':root').prop('--ek-link-size-h6')).toBe('14px');

        expect(css.rule(':root').prop('--ek-link-line-height-default')).toBe('var(--ek-link-line-height)');
        expect(css.rule(':root').prop('--ek-link-line-height-medium')).toBe('1.25em');
        expect(css.rule(':root').prop('--ek-link-line-height-large')).toBe('1.5em');

        expect(css.rule('.ek-link').exists()).toBeTruthy();
        expect(css.rule('.ek-link:hover').exists()).toBeTruthy();
    });
});
