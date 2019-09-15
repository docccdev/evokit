import React from 'react';
import { shallow } from 'enzyme';
import { Body } from '../src';

describe('<Body body-background="..." />', () => {
    it('props body-background', () => {
        const wrapper = shallow(<Body body-background='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ek-body_background_value"></body>');
    });
});
