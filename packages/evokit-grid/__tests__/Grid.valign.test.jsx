import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../src';

describe('<Grid grid-valign="..." />', () => {
    it('props grid-valign', () => {
        const wrapper = shallow(<Grid grid-valign='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_valign_value"></div>');
    });
});
