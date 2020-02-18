import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../theme.css';
import { List } from '../src';

describe('<List list-divider="..." />', () => {
    it('props list-divider', () => {
        const wrapper = shallow(<List list-divider='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ek-list_divider_value"></ul>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-list_divider_TEMPLATE_NAME > .ek-list__item + .ek-list__item').exists()).toBeTruthy();
    });
});
