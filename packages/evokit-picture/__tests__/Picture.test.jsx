import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Picture, PictureItem } from '../src';

describe('<Picture />', () => {
    it('render', () => {
        const wrapper = shallow(<Picture />);
        const wrapperItem = shallow(<PictureItem />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture"></picture>');
        expect(wrapperItem.html()).toEqual('<img class="ek-picture__item"/>');
    });

    it('props className', () => {
        const wrapper = shallow(<Picture className='ololo' />);
        const wrapperItem = shallow(<PictureItem className='ololo' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ololo"></picture>');
        expect(wrapperItem.html()).toEqual('<img class="ek-picture__item ololo"/>');
    });

    it('props picture-tag', () => {
        const wrapper = shallow(<Picture picture-tag='span' />);
        const wrapperItem = shallow(<PictureItem picture-item-tag='span' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-picture"></span>');
        expect(wrapperItem.html()).toEqual('<span class="ek-picture__item"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-picture').exists()).toBeTruthy();
        expect(css.rule('.ek-picture:after').exists()).toBeTruthy();
        expect(css.rule('.ek-picture__item').exists()).toBeTruthy();
        expect(css.rule('.ek-picture__item[alt]').exists()).toBeTruthy();
    });
});
