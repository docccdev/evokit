import React from 'react';
import { shallow } from 'enzyme';
import { ListItem } from '../src';

describe('<ListItem list-item-display="..." />', () => {
    it('props list-item-display', () => {
        const wrapper = shallow(<ListItem list-item-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<li class="ek-list__item ek-list__item_display_value"></li>');
    });
});
