import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../src';

describe('<Image />', () => {
    it('render', () => {
        const wrapper = shallow(<Image src='test.jpg' alt='test alt' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img src="test.jpg" alt="test alt" class="ek-image"/>');
    });

    it('props className', () => {
        const wrapper = shallow(<Image className='ololo' src='' alt='' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img src="" alt="" class="ek-image ololo"/>');
    });

    it('props image-tag', () => {
        const wrapper = shallow(<Image image-tag='span' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-image"></span>');
    });
});
