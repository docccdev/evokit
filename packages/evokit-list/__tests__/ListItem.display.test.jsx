import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { ListItem } from '../src';

describe('<ListItem list-item-display="..." />', () => {
    it('props list-item-display', () => {
        const wrapper = shallow(<ListItem list-item-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<li class="ek-list__item ek-list__item_display_value"></li>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-list__item_display_block').exists()).toBeTruthy();
        expect(css.rule('.ek-list__item_display_none').exists()).toBeTruthy();
    });
});
