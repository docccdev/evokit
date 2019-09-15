import React from 'react';
import { shallow } from 'enzyme';
import { Body } from '../src';

describe('<Body body-color="..." />', () => {
    it('props body-color', () => {
        const wrapper = shallow(<Body body-color='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_color_value"></body>');
    });
});
