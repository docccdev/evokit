import React from 'react';
import { shallow } from 'enzyme';
import { List } from '../src';

describe('<List list-indent="..." />', () => {
    it('props list-indent', () => {
        const wrapper = shallow(<List list-indent='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<ul class="ek-list ek-list_indent_value"></ul>');
    });
});
