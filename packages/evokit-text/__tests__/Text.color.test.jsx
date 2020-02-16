import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../theme.css';
import { Text } from '../src';

describe('<Text text-color="..." />', () => {
    it('props text-color', () => {
        const wrapper = shallow(<Text text-color='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_color_value"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-text_color_TEMPLATE_NAME').exists()).toBeTruthy();
    });
});
