import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box box-zindex="..." />', () => {
    it('props box-zindex', () => {
        const wrapper = shallow(<Box box-zindex='xs' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_zindex_xs"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_zindex_none').exists()).toBeTruthy();
        expect(css.rule('.ek-box_zindex_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_zindex_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_zindex_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_zindex_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_zindex_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_zindex_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_zindex_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_zindex_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_zindex_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_zindex_5xl').exists()).toBeTruthy();
    });
});
