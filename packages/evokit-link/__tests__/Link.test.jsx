import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Link } from '../src';

describe('<Link />', () => {
    it('render', () => {
        const wrapper = shallow(<Link />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link"></a>');
    });

    it('props className', () => {
        const wrapper = shallow(<Link className='ololo' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ololo"></a>');
    });

    it('props link-tag', () => {
        const wrapper = shallow(<Link link-tag='span' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-link"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-link').exists()).toBeTruthy();
    });
});
