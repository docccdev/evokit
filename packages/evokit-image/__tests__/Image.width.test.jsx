import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Image } from '../src';

const range = (start, end) => {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
};

describe('<Image image-width="..." />', () => {
    it('props image-width', () => {
        const wrapper = shallow(<Image image-width='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_width_value"/>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_width_auto').exists()).toBeTruthy();

        range(1, 10).forEach((from) => {
            range(from, 10).filter((to) => to > from || (from == 1 && to == 1)).forEach((to) => {
                console.log(from, to);
                expect(css.rule(`.ek-image_width_${from}-${to}`).exists()).toBeTruthy();
            });
        });
    });
});
