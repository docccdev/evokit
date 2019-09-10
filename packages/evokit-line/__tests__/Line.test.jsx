import React from 'react';
import { shallow } from 'enzyme';
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
});
