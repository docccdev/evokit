import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Body } from '../src';

describe('DEPRECATED <Body body-size="..." />', () => {
    it('props body-size', () => {
        const wrapper = shallow(<Body body-size='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_size_value"></body>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-body_size_xl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_size_xxl .ek-body__section').exists()).toBeTruthy();
        expect(css.rule('.ek-body_size_xxxl .ek-body__section').exists()).toBeTruthy();
    });
});
