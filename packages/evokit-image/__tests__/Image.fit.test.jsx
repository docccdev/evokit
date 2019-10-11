import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../src';

describe('<Image image-fit="..." />', () => {
    it('props image-fit', () => {
        const wrapper = shallow(<Image image-fit='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_fit_value"/>');
    });
});
