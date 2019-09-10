import React from 'react';
import { shallow } from 'enzyme';
import { GridItem } from '../src';

describe('<GridItem grid-item-order="..." />', () => {
    it('props grid-item-order', () => {
        const wrapper = shallow(<GridItem grid-item-order='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid__item ek-grid__item_order_value"></div>');
    });
});
