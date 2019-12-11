import React from 'react';
import { shallow } from 'enzyme';
import { Picture } from '../src';

describe('<Picture picture-background="..." />', () => {
    it('props picture-background', () => {
        const wrapper = shallow(<Picture picture-background='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_background_THEME_NAME"></picture>');
    });
});
