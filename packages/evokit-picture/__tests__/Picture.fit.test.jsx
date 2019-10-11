import React from 'react';
import { shallow } from 'enzyme';
import { Picture } from '../src';

describe('<Picture picture-fit="..." />', () => {
    it('props picture-fit', () => {
        const wrapper = shallow(<Picture picture-fit='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_fit_value"></picture>');
    });
});
