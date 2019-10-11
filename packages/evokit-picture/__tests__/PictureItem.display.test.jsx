import React from 'react';
import { shallow } from 'enzyme';
import { PictureItem } from '../src';

describe('<PictureItem picture-item-display="..." />', () => {
    it('props picture-item-display', () => {
        const wrapper = shallow(<PictureItem picture-item-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-picture__item ek-picture__item_display_value"/>');
    });
});
