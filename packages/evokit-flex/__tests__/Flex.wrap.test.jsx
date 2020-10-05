import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Flex } from '../src';

describe('<Flex flex-wrap="..." />', () => {
    it('props flex-wrap', () => {
        const wrapper = shallow(<Flex flex-wrap='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_wrap_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex_wrap_nowrap').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_wrap_wrap').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_wrap_wrap-reverse').exists()).toBeTruthy();
    });
});
