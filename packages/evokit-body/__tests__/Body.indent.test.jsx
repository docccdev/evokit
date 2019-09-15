import React from 'react';
import { shallow } from 'enzyme';
import { Body } from '../src';

describe('<Body body-indent="..." />', () => {
    it('props body-indent', () => {
        const wrapper = shallow(<Body body-indent='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_indent_value"></body>');
    });
});
