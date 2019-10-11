import React from 'react';
import { shallow } from 'enzyme';
import { List } from '../src';

describe('<List list-divider="..." />', () => {
    it('props list-divider', () => {
        const wrapper = shallow(<List list-divider='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ek-list_divider_value"></ul>');
    });
});
