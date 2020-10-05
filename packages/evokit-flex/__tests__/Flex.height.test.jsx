import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Flex } from '../src';

describe('<Flex flex-height="..." />', () => {
    it('props flex-height', () => {
        const wrapper = shallow(<Flex flex-height='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_height_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex_height_inherit').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_height_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_height_1-1').exists()).toBeTruthy();
    });
});
