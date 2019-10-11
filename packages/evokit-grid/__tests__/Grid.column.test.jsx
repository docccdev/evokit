import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../src';

describe('<Grid grid-column="..." />', () => {
    it('props grid-column', () => {
        const wrapper = shallow(<Grid grid-column='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_column_value"></div>');
    });
});
