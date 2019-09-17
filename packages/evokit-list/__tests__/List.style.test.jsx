import React from 'react';
import { shallow } from 'enzyme';
import { List } from '../src';

describe('<List list-style="..." />', () => {
    it('props list-style', () => {
        const wrapper = shallow(<List list-style='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ek-list_style_value"></ul>');
    });
});
