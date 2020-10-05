import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { FlexItem } from '../src';

describe('<FlexItem flex-item-empty="..." />', () => {
    it('props flex-item-empty', () => {
        const wrapper = shallow(<FlexItem flex-item-empty='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-flex__item ek-flex__item_empty_hidden"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-flex__item_empty_hidden:empty').exists()).toBeTruthy();
    });
});
