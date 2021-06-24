import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Image } from '../src';

describe('<Image image-height="..." />', () => {
    it('props image-height', () => {
        const wrapper = shallow(<Image image-height='auto' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_height_auto"/>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_height_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-image_height_1-1').exists()).toBeTruthy();
    });
});
