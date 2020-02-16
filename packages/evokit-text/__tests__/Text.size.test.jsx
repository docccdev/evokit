import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Text } from '../src';

describe('<Text text-size="..." />', () => {
    it('props text-size', () => {
        const wrapper = shallow(<Text text-size='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_size_value"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-text_size_none').exists()).toBeTruthy();
        expect(css.rule('.ek-text_size_default').exists()).toBeTruthy();
        expect(css.rule('.ek-text_size_small').exists()).toBeTruthy();
        expect(css.rule('.ek-text_size_big').exists()).toBeTruthy();
        expect(css.rule('.ek-text_size_h1').exists()).toBeTruthy();
        expect(css.rule('.ek-text_size_h2').exists()).toBeTruthy();
        expect(css.rule('.ek-text_size_h3').exists()).toBeTruthy();
        expect(css.rule('.ek-text_size_h4').exists()).toBeTruthy();
        expect(css.rule('.ek-text_size_h5').exists()).toBeTruthy();
        expect(css.rule('.ek-text_size_h6').exists()).toBeTruthy();
    });
});
