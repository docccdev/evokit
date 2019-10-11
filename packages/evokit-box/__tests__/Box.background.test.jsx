import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-background="..." />', () => {
    it('props box-background', () => {
        const wrapper = shallow(<Box box-background='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_background_THEME_NAME"></div>');
    });
});
