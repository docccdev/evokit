import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Image } from '../src';

describe('<Image image-alt="..." />', () => {
    it('props image-alt', () => {
        const wrapper = shallow(<Image image-alt='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_alt_value"/>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_alt_visible[alt]').exists()).toBeTruthy();
        expect(css.rule('.ek-image_alt_hidden[alt]').exists()).toBeTruthy();
    });
});
