import React from 'react';
import { shallow } from 'enzyme';
import { Line } from '../src';

describe('<Line line-display="..." />', () => {
    it('props line-display', () => {
        const wrapper = shallow(<Line line-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<hr class="ek-line ek-line_display_value"/>');
    });
});
