import React from 'react';
import { shallow } from 'enzyme';
import { Line } from '../src';

describe('<Line line-color="..." />', () => {
    it('props line-color', () => {
        const wrapper = shallow(<Line line-color='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<hr class="ek-line ek-line_color_value"/>');
    });
});
