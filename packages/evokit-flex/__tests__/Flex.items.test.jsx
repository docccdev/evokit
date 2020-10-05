import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Flex } from '../src';

describe('<Flex flex-items="..." />', () => {
    it('props flex-items', () => {
        const wrapper = shallow(<Flex flex-items='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_items_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex_items_start').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_items_end').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_items_center').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_items_baseline').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_items_stretch').exists()).toBeTruthy();
    });
});
