import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { BodySection } from '../src';

describe('<BodySection body-section-display="..." />', () => {
    it('props body-section-display', () => {
        const wrapper = shallow(<BodySection body-section-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-body__section ek-body__section_display_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-body__section_display_block').exists()).toBeTruthy();
        expect(css.rule('.ek-body__section_display_none').exists()).toBeTruthy();
    });
});
