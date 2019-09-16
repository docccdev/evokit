import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../src';

describe('<Image image-width="..." />', () => {
    it('props image-width', () => {
        const wrapper = shallow(<Image image-width='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_width_value"/>');
    });
});
