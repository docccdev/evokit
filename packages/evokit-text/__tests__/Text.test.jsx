import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text />', () => {
    it('render', () => {
        const wrapper = shallow(<Text />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text"></span>');
    });

    it('props className', () => {
        const wrapper = shallow(<Text className='ololo' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ololo"></span>');
    });

    it('props text-tag', () => {
        const wrapper = shallow(<Text text-tag='div' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-text"></div>');
    });
});
