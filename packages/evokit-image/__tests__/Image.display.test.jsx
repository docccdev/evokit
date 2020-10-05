import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Image } from '../src';

describe('<Image image-display="..." />', () => {
    it('props image-display', () => {
        const wrapper = shallow(<Image image-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_display_value"/>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_display_inline').exists()).toBeTruthy();
        expect(css.rule('.ek-image_display_block').exists()).toBeTruthy();
        expect(css.rule('.ek-image_display_none').exists()).toBeTruthy();
    });
});
