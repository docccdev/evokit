import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Flex } from '../src';

describe('<Flex flex-content="..." />', () => {
    it('props flex-content', () => {
        const wrapper = shallow(<Flex flex-content='center' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_content_center"></div>');
    });

    it('extend 2 props flex-content', () => {
        const wrapper = shallow(<Flex flex-content='start end' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_content-align_start ek-flex_content-justify_end"></div>');
    });

    it('props flex-content-align', () => {
        const wrapper = shallow(<Flex flex-content-align='start' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_content-align_start"></div>');
    });

    it('props flex-content-justify', () => {
        const wrapper = shallow(<Flex flex-content-justify='end' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_content-justify_end"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex_content_start').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_end').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_center').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_between').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_around').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_stretch').exists()).toBeTruthy();

        expect(css.rule('.ek-flex_content_align-start').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_align-end').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_align-center').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_align-between').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_align-around').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_align-stretch').exists()).toBeTruthy();

        expect(css.rule('.ek-flex_content_justify-start').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_justify-end').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_justify-center').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_justify-between').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_justify-around').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_content_justify-stretch').exists()).toBeTruthy();
    });
});
