import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { FlexItem } from '../src';

describe('<FlexItem flex-item-align="..." />', () => {
    it('props flex-item-align', () => {
        const wrapper = shallow(<FlexItem flex-item-align='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex__item ek-flex__item_align_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex__item_align_start').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_align_end').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_align_center').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_align_baseline').exists()).toBeTruthy();
        expect(css.rule('.ek-flex__item_align_stretch').exists()).toBeTruthy();
    });
});
