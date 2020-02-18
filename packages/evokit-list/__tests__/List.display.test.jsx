import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { List } from '../src';

describe('<List list-display="..." />', () => {
    it('props list-display', () => {
        const wrapper = shallow(<List list-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ek-list_display_value"></ul>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-list_display_block').exists()).toBeTruthy();
        expect(css.rule('.ek-list_display_none').exists()).toBeTruthy();
    });
});
