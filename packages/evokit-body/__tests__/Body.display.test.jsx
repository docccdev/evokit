import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Body } from '../src';

describe('<Body body-display="..." />', () => {
    it('props body-display', () => {
        const wrapper = shallow(<Body body-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_display_value"></body>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-body_display_block').exists()).toBeTruthy();
        expect(css.rule('.ek-body_display_none').exists()).toBeTruthy();
    });
});
