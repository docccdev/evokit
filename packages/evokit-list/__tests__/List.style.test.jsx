import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { List } from '../src';

describe('<List list-style="..." />', () => {
    it('props list-style', () => {
        const wrapper = shallow(<List list-style='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ek-list_style_value"></ul>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-list_style_dash > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_style_decimal > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_style_disc > .ek-list__item').exists()).toBeTruthy();

        expect(css.rule('.ek-list_style_dash > .ek-list__item:before').exists()).toBeTruthy();
        expect(css.rule('.ek-list_style_decimal > .ek-list__item:before').exists()).toBeTruthy();
        expect(css.rule('.ek-list_style_disc > .ek-list__item:before').exists()).toBeTruthy();
    });
});
