import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../theme.css';
import { Body } from '../src';

describe('<Body body-background="..." />', () => {
    it('props body-background', () => {
        const wrapper = shallow(<Body body-background='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_background_value"></body>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-body_background_TEMPLATE_NAME').exists()).toBeTruthy();
    });
});
