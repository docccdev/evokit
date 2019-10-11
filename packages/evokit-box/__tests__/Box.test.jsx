import React from 'react';
import { shallow } from 'enzyme';
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
});
