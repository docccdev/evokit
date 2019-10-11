import React from 'react';
import { shallow } from 'enzyme';
import { Grid, GridItem } from '../src';

describe('<Grid />', () => {
    it('render', () => {
        const wrapper = shallow(<Grid />);
        const wrapperItem = shallow(<GridItem />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid"></div>');
        expect(wrapperItem.html()).toEqual('<div class="ek-grid__item"></div>');
    });

    it('props className', () => {
        const wrapper = shallow(<Grid className='ololo' />);
        const wrapperItem = shallow(<GridItem className='ololo' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ololo"></div>');
        expect(wrapperItem.html()).toEqual('<div class="ek-grid__item ololo"></div>');
    });

    it('props grid-tag', () => {
        const wrapper = shallow(<Grid grid-tag='span' />);
        const wrapperItem = shallow(<GridItem grid-item-tag='span' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-grid"></span>');
        expect(wrapperItem.html()).toEqual('<span class="ek-grid__item"></span>');
    });
});
