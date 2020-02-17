import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Line } from '../src';

describe('<Line />', () => {
    it('render', () => {
        const wrapper = shallow(<Line />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<hr class="ek-line"/>');
    });

    it('props className', () => {
        const wrapper = shallow(<Line className='ololo' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<hr class="ek-line ololo"/>');
    });

    it('props line-tag', () => {
        const wrapper = shallow(<Line line-tag='span' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-line"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-line').exists()).toBeTruthy();
    });
});
