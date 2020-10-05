import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Link } from '../src';

describe('<Link link-wrap="..." />', () => {
    it('props link-wrap', () => {
        const wrapper = shallow(<Link link-wrap='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_wrap_value"></a>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-link_wrap_normal').exists()).toBeTruthy();
        expect(css.rule('.ek-link_wrap_nowrap').exists()).toBeTruthy();
        expect(css.rule('.ek-link_wrap_pre').exists()).toBeTruthy();
        expect(css.rule('.ek-link_wrap_pre-wrap').exists()).toBeTruthy();
        expect(css.rule('.ek-link_wrap_pre-line').exists()).toBeTruthy();
        expect(css.rule('.ek-link_wrap_break').exists()).toBeTruthy();
        expect(css.rule('.ek-link_wrap_ellipsis').exists()).toBeTruthy();
    });
});
