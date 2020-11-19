import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Plug } from '../src';

describe('<Plug />', () => {
    it('render', () => {
        const wrapper = shallow(<Plug />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-plug"></div>');
    });

    it('props className', () => {
        const wrapper = shallow(<Plug className='ololo' />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-plug ololo"></div>');
    });

    it('props plug-as', () => {
        const wrapper = shallow(<Plug plug-as='span' />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-plug"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-plug').exists()).toBeTruthy();
    });
});
