import React from 'react';
import { shallow } from 'enzyme';
import { Body } from '../src';

describe('<Body body-overflow="..." />', () => {
    it('props body-overflow', () => {
        const wrapper = shallow(<Body body-overflow='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_overflow_hidden"></body>');
    });

    it('extend 2 props body-overflow', () => {
        const wrapper = shallow(<Body body-overflow='scroll visible' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_overflow-x_scroll ek-body_overflow-y_visible"></body>');
    });

    it('props body-overflow-x', () => {
        const wrapper = shallow(<Body body-overflow-x='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_overflow-x_hidden"></body>');
    });

    it('props body-overflow-y', () => {
        const wrapper = shallow(<Body body-overflow-y='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_overflow-y_hidden"></body>');
    });
});
