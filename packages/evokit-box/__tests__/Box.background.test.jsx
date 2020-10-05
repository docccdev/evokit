import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../theme.css';
import { Box } from '../src';

describe('<Box box-background="..." />', () => {
    it('props box-background', () => {
        const wrapper = shallow(<Box box-background='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_background_THEME_NAME"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_background_TEMPLATE_NAME').exists()).toBeTruthy();
    });
});
