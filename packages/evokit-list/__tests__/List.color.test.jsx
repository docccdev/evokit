import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../theme.css';
import { List } from '../src';

describe('<List list-color="..." />', () => {
    it('props list-color', () => {
        const wrapper = shallow(<List list-color='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ek-list_color_value"></ul>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-list_color_TEMPLATE_NAME > .ek-list__item:before').exists()).toBeTruthy();
    });
});
