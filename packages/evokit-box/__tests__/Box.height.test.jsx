import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box box-height="..." />', () => {
    it('props box-height', () => {
        const wrapper = shallow(<Box box-height='1-1' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_height_1-1"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_height_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-box_height_1-1').exists()).toBeTruthy();
    });
});
