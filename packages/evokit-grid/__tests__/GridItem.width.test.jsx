import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { GridItem } from '../src';

const range = (start, end) => {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
};

describe('<GridItem grid-item-width="..." />', () => {
    it('props grid-item-width', () => {
        const wrapper = shallow(<GridItem grid-item-width='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid__item ek-grid__item_width_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(`.ek-grid__item_width_auto`).exists()).toBeTruthy();
        expect(css.rule(`.ek-grid__item_width_expand`).exists()).toBeTruthy();

        range(1, 10).forEach((from) => {
            range(from, 10).filter((to) => to > from || (from == 1 && to == 1)).forEach((to) => {
                expect(css.rule(`.ek-grid__item_width_${from}-${to}`).exists()).toBeTruthy();
            });
        });
    });
});
