import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Link } from '../src';

describe('<Link link-style="..." />', () => {
    it('props link-style', () => {
        const wrapper = shallow(<Link link-style='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_style_value"></a>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-link_style_multi-line').exists()).toBeTruthy();
        expect(css.rule('.ek-link_style_multi-line:after').exists()).toBeTruthy();

        expect(css.rule('.ek-link_style_solid').exists()).toBeTruthy();
        expect(css.rule('.ek-link_style_solid:hover').exists()).toBeTruthy();

        expect(css.rule('.ek-link_style_dotted').exists()).toBeTruthy();
        expect(css.rule('.ek-link_style_dotted:hover').exists()).toBeTruthy();

        expect(css.rule('.ek-link_style_dashed').exists()).toBeTruthy();
        expect(css.rule('.ek-link_style_dashed:hover').exists()).toBeTruthy();
    });
});
