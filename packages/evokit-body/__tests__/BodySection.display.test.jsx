import React from 'react';
import { shallow } from 'enzyme';
import { BodySection } from '../src';

describe('<BodySection body-section-display="..." />', () => {
    it('props body-section-display', () => {
        const wrapper = shallow(<BodySection body-section-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-body__section ek-body__section_display_value"></div>');
    });
});
