import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Text } from '../src';

describe('<Text text-transform="..." />', () => {
    it('props text-transform', () => {
        const wrapper = shallow(<Text text-transform='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_transform_value"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-text_transform_none').exists()).toBeTruthy();
        expect(css.rule('.ek-text_transform_capitalize').exists()).toBeTruthy();
        expect(css.rule('.ek-text_transform_lowercase').exists()).toBeTruthy();
        expect(css.rule('.ek-text_transform_uppercase').exists()).toBeTruthy();
    });
});
