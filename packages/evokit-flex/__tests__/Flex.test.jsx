import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Flex, FlexItem } from '../src';

describe('<Flex />', () => {
    it('render', () => {
        const wrapper = shallow(<Flex />);
        const wrapperItem = shallow(<FlexItem />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex"></div>');
        expect(wrapperItem.html()).toEqual('<div class="ek-flex__item"></div>');
    });

    it('props className', () => {
        const wrapper = shallow(<Flex className='ololo' />);
        const wrapperItem = shallow(<FlexItem className='ololo' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ololo"></div>');
        expect(wrapperItem.html()).toEqual('<div class="ek-flex__item ololo"></div>');
    });

    it('props flex-tag', () => {
        const wrapper = shallow(<Flex flex-tag='span' />);
        const wrapperItem = shallow(<FlexItem flex-item-tag='span' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-flex"></span>');
        expect(wrapperItem.html()).toEqual('<span class="ek-flex__item"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item').exists()).toBeTruthy();
    });
});
