import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { GridItem } from '../src';

describe('<GridItem grid-item-order="..." />', () => {
    it('props grid-item-order', () => {
        const wrapper = shallow(<GridItem grid-item-order='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid__item ek-grid__item_order_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid__item_order_1').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item_order_2').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item_order_3').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item_order_4').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item_order_5').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item_order_6').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item_order_7').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item_order_8').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item_order_9').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item_order_10').exists()).toBeTruthy();
    });
});
