import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../src';

describe('<Image image-mirror="..." />', () => {
    it('props image-mirror', () => {
        const wrapper = shallow(<Image image-mirror='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_mirror_value"/>');
    });
});
