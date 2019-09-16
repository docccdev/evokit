import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../src';

describe('<Image image-display="..." />', () => {
    it('props image-display', () => {
        const wrapper = shallow(<Image image-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_display_value"/>');
    });
});
