import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Text } from '../src';

describe('<Text text-weight="..." />', () => {
    it('props text-weight', () => {
        const wrapper = shallow(<Text text-weight='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_weight_value"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-text_weight_default').exists()).toBeTruthy();
        expect(css.rule('.ek-text_weight_thin').exists()).toBeTruthy();
        expect(css.rule('.ek-text_weight_light').exists()).toBeTruthy();
        expect(css.rule('.ek-text_weight_medium').exists()).toBeTruthy();
        expect(css.rule('.ek-text_weight_bold').exists()).toBeTruthy();
        expect(css.rule('.ek-text_weight_black').exists()).toBeTruthy();
    });
});
