import React from 'react';
import { shallow } from 'enzyme';
import { List } from '../src';

describe('<List list-color="..." />', () => {
    it('props list-color', () => {
        const wrapper = shallow(<List list-color='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ek-list_color_value"></ul>');
    });
});
