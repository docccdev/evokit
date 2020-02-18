import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { List } from '../src';

describe('<List list-divider-indent="..." />', () => {
    it('props list-divider-indent', () => {
        const wrapper = shallow(<List list-divider-indent='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ek-list_divider-indent_value"></ul>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-list_divider-indent_none').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_s').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_m').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_l').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-list_divider-indent_none > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_xxs > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_xs > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_s > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_m > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_l > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_xl > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_xxl > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_3xl > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_4xl > .ek-list__item').exists()).toBeTruthy();
        expect(css.rule('.ek-list_divider-indent_5xl > .ek-list__item').exists()).toBeTruthy();
    });
});
