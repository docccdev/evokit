import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Image } from '../src';

describe('<Image image-align="..." />', () => {
    it('props image-align', () => {
        const wrapper = shallow(<Image image-align='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_align_value"/>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_align_left').exists()).toBeTruthy();
        expect(css.rule('.ek-image_align_center').exists()).toBeTruthy();
        expect(css.rule('.ek-image_align_right').exists()).toBeTruthy();
    });
});
