import React from 'react';
import { shallow } from 'enzyme';
import { Picture } from '../src';

describe('<Picture picture-display="..." />', () => {
    it('props picture-display', () => {
        const wrapper = shallow(<Picture picture-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_display_value"></picture>');
    });
});
