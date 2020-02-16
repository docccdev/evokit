import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Image } from '../src';

describe('<Image image-mirror="..." />', () => {
    it('props image-mirror', () => {
        const wrapper = shallow(<Image image-mirror='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_mirror_value"/>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_mirror_x').exists()).toBeTruthy();
        expect(css.rule('.ek-image_mirror_y').exists()).toBeTruthy();
        expect(css.rule('.ek-image_mirror_xy').exists()).toBeTruthy();
    });
});
