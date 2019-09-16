import React from 'react';
import { shallow } from 'enzyme';
import { Line } from '../src';

describe('<Line line-indent="..." />', () => {
    it('props line-indent', () => {
        const wrapper = shallow(<Line line-indent='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<hr class="ek-line ek-line_indent_value"/>');
    });
});
