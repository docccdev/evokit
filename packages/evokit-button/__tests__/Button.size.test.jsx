import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Button } from '../src';

describe('<Button button-size="..." />', () => {
    it('props button-size', () => {
        const wrapper = shallow(<Button button-size='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_size_value"></button>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(':root').exists()).toBeTruthy();
        expect(css.rule(':root').prop('--ek-button-size-small')).toBe('11px');
        expect(css.rule(':root').prop('--ek-button-size-default')).toBe('var(--ek-button-font-size)');
        expect(css.rule(':root').prop('--ek-button-size-big')).toBe('15px');
        expect(css.rule(':root').prop('--ek-button-size-h1')).toBe('24px');
        expect(css.rule(':root').prop('--ek-button-size-h2')).toBe('22px');
        expect(css.rule(':root').prop('--ek-button-size-h3')).toBe('20px');
        expect(css.rule(':root').prop('--ek-button-size-h4')).toBe('18px');
        expect(css.rule(':root').prop('--ek-button-size-h5')).toBe('16px');
        expect(css.rule(':root').prop('--ek-button-size-h6')).toBe('14px');

        expect(css.rule('.ek-button_size_none').exists()).toBeTruthy();
        expect(css.rule('.ek-button_size_inherit').exists()).toBeTruthy();
        expect(css.rule('.ek-button_size_small').exists()).toBeTruthy();
        expect(css.rule('.ek-button_size_default').exists()).toBeTruthy();
        expect(css.rule('.ek-button_size_big').exists()).toBeTruthy();
        expect(css.rule('.ek-button_size_h1').exists()).toBeTruthy();
        expect(css.rule('.ek-button_size_h2').exists()).toBeTruthy();
        expect(css.rule('.ek-button_size_h3').exists()).toBeTruthy();
        expect(css.rule('.ek-button_size_h4').exists()).toBeTruthy();
        expect(css.rule('.ek-button_size_h5').exists()).toBeTruthy();
        expect(css.rule('.ek-button_size_h6').exists()).toBeTruthy();
    });
});
