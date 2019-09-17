import React from 'react';
import { shallow } from 'enzyme';
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
});
