import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Image } from '../src';

describe('<Image image-fit="..." />', () => {
    it('props image-fit', () => {
        const wrapper = shallow(<Image image-fit='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_fit_value"/>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_fit_none').exists()).toBeTruthy();
        expect(css.rule('.ek-image_fit_fill').exists()).toBeTruthy();
        expect(css.rule('.ek-image_fit_contain').exists()).toBeTruthy();
        expect(css.rule('.ek-image_fit_cover').exists()).toBeTruthy();
        expect(css.rule('.ek-image_fit_scale-down').exists()).toBeTruthy();
    });
});
