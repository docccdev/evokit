import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { FlexItem } from '../src';

describe('<FlexItem flex-item-order="..." />', () => {
    it('props flex-item-order', () => {
        const wrapper = shallow(<FlexItem flex-item-order='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex__item ek-flex__item_order_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex__item_order_0').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_order_1').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_order_2').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_order_3').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_order_4').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_order_5').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_order_6').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_order_7').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_order_8').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_order_9').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_order_10').exists()).toBeTruthy();
    });
});
