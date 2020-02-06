import React from 'react';
import barista from 'seed-barista';
import { shallow } from 'enzyme';
import { Grid, GridItem } from '../src';
import style from '../style.css';

describe('<Grid />', () => {
    it('render', () => {
        const wrapper = shallow(<Grid />);
        const wrapperItem = shallow(<GridItem />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid"></div>');
        expect(wrapperItem.html()).toEqual('<div class="ek-grid__item"></div>');
    });

    it('props className', () => {
        const wrapper = shallow(<Grid className='ololo' />);
        const wrapperItem = shallow(<GridItem className='ololo' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ololo"></div>');
        expect(wrapperItem.html()).toEqual('<div class="ek-grid__item ololo"></div>');
    });

    it('props grid-tag', () => {
        const wrapper = shallow(<Grid grid-tag='span' />);
        const wrapperItem = shallow(<GridItem grid-item-tag='span' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-grid"></span>');
        expect(wrapperItem.html()).toEqual('<span class="ek-grid__item"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(':root').exists()).toBeTruthy();
        expect(css.rule(':root').prop('--ek-grid-indent-xxs')).toBe('5px');
        expect(css.rule(':root').prop('--ek-grid-indent-xs')).toBe('10px');
        expect(css.rule(':root').prop('--ek-grid-indent-s')).toBe('15px');
        expect(css.rule(':root').prop('--ek-grid-indent-m')).toBe('20px');
        expect(css.rule(':root').prop('--ek-grid-indent-l')).toBe('25px');
        expect(css.rule(':root').prop('--ek-grid-indent-xl')).toBe('30px');
        expect(css.rule(':root').prop('--ek-grid-indent-xxl')).toBe('35px');
        expect(css.rule(':root').prop('--ek-grid-indent-3xl')).toBe('40px');
        expect(css.rule(':root').prop('--ek-grid-indent-4xl')).toBe('45px');
        expect(css.rule(':root').prop('--ek-grid-indent-5xl')).toBe('50px');

        expect(css.rule('.ek-grid').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item').exists()).toBeTruthy();
    });
});
