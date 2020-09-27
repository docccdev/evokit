import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Body } from '../src';

describe('<Body body-overflow-anchor="..." />', () => {
    it('props body-overflow-anchor', () => {
        const wrapper = shallow(<Body body-overflow-anchor='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_overflow-anchor_value"></body>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-body_overflow-anchor_none').exists()).toBeTruthy();
        expect(css.rule('.ek-body_overflow-anchor_auto').exists()).toBeTruthy();
    });
});
