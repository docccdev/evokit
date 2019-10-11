import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../src';

describe('<Grid grid-wrap="..." />', () => {
    it('props grid-wrap', () => {
        const wrapper = shallow(<Grid grid-wrap='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-grid ek-grid_wrap_value"></div>');
    });
});
