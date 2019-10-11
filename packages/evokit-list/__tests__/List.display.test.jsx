import React from 'react';
import { shallow } from 'enzyme';
import { List } from '../src';

describe('<List list-display="..." />', () => {
    it('props list-display', () => {
        const wrapper = shallow(<List list-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ek-list_display_value"></ul>');
    });
});
