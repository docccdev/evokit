import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../src';

describe('<Image image-align="..." />', () => {
    it('props image-align', () => {
        const wrapper = shallow(<Image image-align='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_align_value"/>');
    });
});
