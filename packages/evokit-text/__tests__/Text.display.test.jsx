import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Text } from '../src';

describe('<Text text-display="..." />', () => {
    it('props text-display', () => {
        const wrapper = shallow(<Text text-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_display_value"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-text_display_inline').exists()).toBeTruthy();
        expect(css.rule('.ek-text_display_none').exists()).toBeTruthy();
    });
});
