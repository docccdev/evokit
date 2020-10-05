import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Flex } from '../src';

describe('<Flex flex-direction="..." />', () => {
    it('props flex-direction', () => {
        const wrapper = shallow(<Flex flex-direction='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex ek-flex_direction_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex_direction_row').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_direction_row-reverse').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_direction_column').exists()).toBeTruthy();
        expect(css.rule('.ek-flex_direction_column-reverse').exists()).toBeTruthy();
    });
});
