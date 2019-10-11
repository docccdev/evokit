import React from 'react';
import { shallow } from 'enzyme';
import { Body } from '../src';

describe('<Body body-size="..." />', () => {
    it('props body-size', () => {
        const wrapper = shallow(<Body body-size='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_size_value"></body>');
    });
});
