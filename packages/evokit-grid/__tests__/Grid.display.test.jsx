import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../src';

describe('<Grid grid-display="..." />', () => {
    it('props grid-display', () => {
        const wrapper = shallow(<Grid grid-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_display_value"></div>');
    });
});
