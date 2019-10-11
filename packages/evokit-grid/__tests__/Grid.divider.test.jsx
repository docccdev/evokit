import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../src';

describe('<Grid grid-divider="..." />', () => {
    it('props grid-divider', () => {
        const wrapper = shallow(<Grid grid-divider='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_divider_value"></div>');
    });
});
