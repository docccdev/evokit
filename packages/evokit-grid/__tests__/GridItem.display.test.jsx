import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { GridItem } from '../src';

describe('<GridItem grid-item-display="..." />', () => {
    it('props grid-item-display', () => {
        const wrapper = shallow(<GridItem grid-item-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid__item ek-grid__item_display_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-grid__item_display_block').exists()).toBeTruthy();
        expect(css.rule('.ek-grid__item_display_none').exists()).toBeTruthy();
    });
});
