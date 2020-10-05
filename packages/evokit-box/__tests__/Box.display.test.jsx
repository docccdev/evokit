import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box box-display="..." />', () => {
    it('props box-display', () => {
        const wrapper = shallow(<Box box-display='inline-block' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_display_inline-block"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_display_block').exists()).toBeTruthy();
        expect(css.rule('.ek-box_display_inline-block').exists()).toBeTruthy();
        expect(css.rule('.ek-box_display_inline').exists()).toBeTruthy();
        expect(css.rule('.ek-box_display_none').exists()).toBeTruthy();
    });
});
