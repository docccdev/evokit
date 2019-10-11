import React from 'react';
import { shallow } from 'enzyme';
import { Body } from '../src';

describe('<Body body-display="..." />', () => {
    it('props body-display', () => {
        const wrapper = shallow(<Body body-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_display_value"></body>');
    });
});
