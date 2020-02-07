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
        const values = [1,2,3,4,5,6,7,8,9,10];

        values.forEach((name) => {
            expect(css.rule(`.ek-grid__item_order_${name}`).exists()).toBeTruthy();
        });
    });
});
