import React from 'react';
import { shallow } from 'enzyme';
import { GridItem } from '../src';

describe('<GridItem grid-item-width="..." />', () => {
    it('props grid-item-width', () => {
        const wrapper = shallow(<GridItem grid-item-width='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid__item ek-grid__item_width_value"></div>');
    });
});
