import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box box-align="..." />', () => {
    it('props box-align', () => {
        const wrapper = shallow(<Box box-align='left' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_align_left"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_align_none').exists()).toBeTruthy();
        expect(css.rule('.ek-box_align_left').exists()).toBeTruthy();
        expect(css.rule('.ek-box_align_center').exists()).toBeTruthy();
        expect(css.rule('.ek-box_align_right').exists()).toBeTruthy();
    });
});
