import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Link } from '../src';

describe('<Link link-size="..." />', () => {
    it('props link-size', () => {
        const wrapper = shallow(<Link link-size='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_size_value"></a>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-link_size_none').exists()).toBeTruthy();
        expect(css.rule('.ek-link_size_inherit').exists()).toBeTruthy();
        expect(css.rule('.ek-link_size_small').exists()).toBeTruthy();
        expect(css.rule('.ek-link_size_default').exists()).toBeTruthy();
        expect(css.rule('.ek-link_size_big').exists()).toBeTruthy();
        expect(css.rule('.ek-link_size_h1').exists()).toBeTruthy();
        expect(css.rule('.ek-link_size_h2').exists()).toBeTruthy();
        expect(css.rule('.ek-link_size_h3').exists()).toBeTruthy();
        expect(css.rule('.ek-link_size_h4').exists()).toBeTruthy();
        expect(css.rule('.ek-link_size_h5').exists()).toBeTruthy();
        expect(css.rule('.ek-link_size_h6').exists()).toBeTruthy();
    });
});
