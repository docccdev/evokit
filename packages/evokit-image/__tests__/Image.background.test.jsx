import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../theme.css';
import { Image } from '../src';

describe('<Image image-background="..." />', () => {
    it('props image-background', () => {
        const wrapper = shallow(<Image image-background='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_background_THEME_NAME"/>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_background_TEMPLATE_NAME').exists()).toBeTruthy();
    });
});
