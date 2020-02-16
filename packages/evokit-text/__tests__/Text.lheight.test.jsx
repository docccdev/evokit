import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Text } from '../src';

describe('<Text text-lheight="..." />', () => {
    it('props text-lheight', () => {
        const wrapper = shallow(<Text text-lheight='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_lheight_value"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-text_lheight_default').exists()).toBeTruthy();
        expect(css.rule('.ek-text_lheight_medium').exists()).toBeTruthy();
        expect(css.rule('.ek-text_lheight_large').exists()).toBeTruthy();
    });
});
