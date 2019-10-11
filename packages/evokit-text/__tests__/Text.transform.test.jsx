import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../src';

describe('<Text text-transform="..." />', () => {
    it('props text-transform', () => {
        const wrapper = shallow(<Text text-transform='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-text ek-text_transform_value"></span>');
    });
});
