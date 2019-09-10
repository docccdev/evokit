import React from 'react';
import { shallow } from 'enzyme';
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
});