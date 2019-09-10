import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../src';

describe('<Grid grid-direction="..." />', () => {
    it('props grid-direction', () => {
        const wrapper = shallow(<Grid grid-direction='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_direction_value"></div>');
    });
});
