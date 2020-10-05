import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { FlexItem } from '../src';

describe('<FlexItem flex-item-display="..." />', () => {
    it('props flex-item-display', () => {
        const wrapper = shallow(<FlexItem flex-item-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex__item ek-flex__item_display_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex__item_display_block').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_display_none').exists()).toBeTruthy();
    });
});
