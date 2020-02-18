import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { List, ListItem } from '../src';

describe('<List />', () => {
    it('render', () => {
        const wrapper = shallow(<List />);
        const wrapperItem = shallow(<ListItem />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list"></ul>');
        expect(wrapperItem.html()).toEqual('<li class="ek-list__item"></li>');
    });

    it('props className', () => {
        const wrapper = shallow(<List className='ololo' />);
        const wrapperItem = shallow(<ListItem className='ololo' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ololo"></ul>');
        expect(wrapperItem.html()).toEqual('<li class="ek-list__item ololo"></li>');
    });

    it('props list-tag', () => {
        const wrapper = shallow(<List list-tag='span' />);
        const wrapperItem = shallow(<ListItem list-item-tag='span' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-list"></span>');
        expect(wrapperItem.html()).toEqual('<span class="ek-list__item"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule(':root').prop('--ek-list-indent-xxs')).toEqual('5px');
        expect(css.rule(':root').prop('--ek-list-indent-xs')).toEqual('10px');
        expect(css.rule(':root').prop('--ek-list-indent-s')).toEqual('15px');
        expect(css.rule(':root').prop('--ek-list-indent-m')).toEqual('20px');
        expect(css.rule(':root').prop('--ek-list-indent-l')).toEqual('25px');
        expect(css.rule(':root').prop('--ek-list-indent-xl')).toEqual('30px');
        expect(css.rule(':root').prop('--ek-list-indent-xxl')).toEqual('35px');
        expect(css.rule(':root').prop('--ek-list-indent-3xl')).toEqual('40px');
        expect(css.rule(':root').prop('--ek-list-indent-4xl')).toEqual('45px');
        expect(css.rule(':root').prop('--ek-list-indent-5xl')).toEqual('50px');

        expect(css.rule('.ek-list').exists()).toBeTruthy();
        expect(css.rule('.ek-list__item').exists()).toBeTruthy();
    });
});
