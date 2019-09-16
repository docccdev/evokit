import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../src';

describe('<Image image-valign="..." />', () => {
    it('props image-valign', () => {
        const wrapper = shallow(<Image image-valign='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_valign_value"/>');
    });
});
