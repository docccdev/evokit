import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Link } from '../src';

describe('<Link link-valign="..." />', () => {
    it('props link-valign', () => {
        const wrapper = shallow(<Link link-valign='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_valign_value"></a>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-link_valign_baseline').exists()).toBeTruthy();
        expect(css.rule('.ek-link_valign_bottom').exists()).toBeTruthy();
        expect(css.rule('.ek-link_valign_middle').exists()).toBeTruthy();
        expect(css.rule('.ek-link_valign_sub').exists()).toBeTruthy();
        expect(css.rule('.ek-link_valign_super').exists()).toBeTruthy();
        expect(css.rule('.ek-link_valign_text-bottom').exists()).toBeTruthy();
        expect(css.rule('.ek-link_valign_text-top').exists()).toBeTruthy();
        expect(css.rule('.ek-link_valign_top').exists()).toBeTruthy();
    });
});
