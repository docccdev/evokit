import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box />', () => {
    it('render', () => {
        const wrapper = shallow(<Box />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box"></div>');
    });

    it('props className', () => {
        const wrapper = shallow(<Box className='ololo' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ololo"></div>');
    });

    it('props box-tag', () => {
        const wrapper = shallow(<Box box-tag='span' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-box"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box').exists()).toBeTruthy();
        expect(css.rule('.ek-box:after').exists()).toBeTruthy();
        expect(css.rule('.ek-box:before').exists()).toBeTruthy();
    });
});
