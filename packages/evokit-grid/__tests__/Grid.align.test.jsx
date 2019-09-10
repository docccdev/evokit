import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../src';

describe('<Grid grid-align="..." />', () => {
    it('props grid-align', () => {
        const wrapper = shallow(<Grid grid-align='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_align_value"></div>');
    });
});
