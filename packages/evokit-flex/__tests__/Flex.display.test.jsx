import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Flex } from '../src';

describe('<Flex flex-display="..." />', () => {
    it('props flex-display', () => {
        const wrapper = shallow(<Flex flex-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_display_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex_display_flex').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_display_inline-flex').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_display_none').exists()).toBeTruthy();
    });
});
