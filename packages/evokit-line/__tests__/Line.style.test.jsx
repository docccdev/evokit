import React from 'react';
import { shallow } from 'enzyme';
import { Line } from '../src';

describe('<Line line-style="..." />', () => {
    it('props line-style', () => {
        const wrapper = shallow(<Line line-style='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<hr class="ek-line ek-line_style_value"/>');
    });
});
