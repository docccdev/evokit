import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

const range = (start, end) => {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
};

describe('<Box box-width="..." />', () => {
    it('props box-width', () => {
        const wrapper = shallow(<Box box-width='1-7' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_width_1-7"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(`.ek-box_width_auto`).exists()).toBeTruthy();

        range(1, 10).forEach((from) => {
            range(from, 10).filter((to) => to > from || (from == 1 && to == 1)).forEach((to) => {
                expect(css.rule(`.ek-box_width_${from}-${to}`).exists()).toBeTruthy();
            });
        });
    });
});
