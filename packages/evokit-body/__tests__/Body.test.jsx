import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Body, BodySection } from '../src';

describe('<Body />', () => {
    it('render', () => {
        const wrapper = shallow(<Body />);
        const wrapperSection = shallow(<BodySection />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperSection).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body"></body>');
        expect(wrapperSection.html()).toEqual('<div class="ek-body__section"></div>');
    });

    it('props className', () => {
        const wrapper = shallow(<Body className='ololo' />);
        const wrapperSection = shallow(<BodySection className='ololo' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperSection).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ololo"></body>');
        expect(wrapperSection.html()).toEqual('<div class="ek-body__section ololo"></div>');
    });

    it('props body-tag', () => {
        const wrapper = shallow(<Body body-tag='span' />);
        const wrapperSection = shallow(<BodySection body-section-tag='span' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperSection).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-body"></span>');
        expect(wrapperSection.html()).toEqual('<span class="ek-body__section"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(':root').exists()).toBeTruthy();
        expect(css.rule(':root').prop('--ek-body-font-family')).toBe('system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif');
        expect(css.rule(':root').prop('--ek-body-font-size')).toBe('13px');
        expect(css.rule(':root').prop('--ek-body-font-weight')).toBe('400');
        expect(css.rule(':root').prop('--ek-body-line-height')).toBe('1em');
        expect(css.rule(':root').prop('--ek-body-min-width')).toBe('320px');
        expect(css.rule(':root').prop('--ek-body-max-width')).toBe('1240px');

        expect(css.rule(':root').prop('--ek-body-indent-xxs')).toBe('5px');
        expect(css.rule(':root').prop('--ek-body-indent-xs')).toBe('10px');
        expect(css.rule(':root').prop('--ek-body-indent-s')).toBe('15px');
        expect(css.rule(':root').prop('--ek-body-indent-m')).toBe('20px');
        expect(css.rule(':root').prop('--ek-body-indent-l')).toBe('25px');
        expect(css.rule(':root').prop('--ek-body-indent-xl')).toBe('30px');
        expect(css.rule(':root').prop('--ek-body-indent-xxl')).toBe('35px');
        expect(css.rule(':root').prop('--ek-body-indent-3xl')).toBe('40px');
        expect(css.rule(':root').prop('--ek-body-indent-4xl')).toBe('45px');
        expect(css.rule(':root').prop('--ek-body-indent-5xl')).toBe('50px');

        expect(css.rule(':root').prop('--ek-body-width-xxs')).toBe('320px');
        expect(css.rule(':root').prop('--ek-body-width-xs')).toBe('480px');
        expect(css.rule(':root').prop('--ek-body-width-s')).toBe('768px');
        expect(css.rule(':root').prop('--ek-body-width-m')).toBe('900px');
        expect(css.rule(':root').prop('--ek-body-width-l')).toBe('1024px');
        expect(css.rule(':root').prop('--ek-body-width-xl')).toBe('1280px');
        expect(css.rule(':root').prop('--ek-body-width-xxl')).toBe('1366px');
        expect(css.rule(':root').prop('--ek-body-width-3xl')).toBe('1440px');
        expect(css.rule(':root').prop('--ek-body-width-4xl')).toBe('1600px');
        expect(css.rule(':root').prop('--ek-body-width-5xl')).toBe('1920px');

        expect(css.rule('.ek-body').exists()).toBeTruthy();
        expect(css.rule('.ek-body__section').exists()).toBeTruthy();
    });

    describe("DEPRECATED css", () => {
        it('css', () => {
            const css = barista({ content: style });

            expect(css.rule(':root').prop('--ek-body-max-width-xl')).toBe('1440px');
            expect(css.rule(':root').prop('--ek-body-max-width-xxl')).toBe('1640px');
            expect(css.rule(':root').prop('--ek-body-max-width-xxxl')).toBe('1840px');
        });
    });
});
