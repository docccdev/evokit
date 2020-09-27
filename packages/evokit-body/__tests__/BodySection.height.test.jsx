import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { BodySection } from '../src';

describe('<BodySection body-section-height="..." />', () => {
    it('props body-section-height', () => {
        const wrapper = shallow(<BodySection body-section-height='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-body__section ek-body__section_height_value"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-body__section_height_auto').exists()).toBeTruthy();
        expect(css.rule('.ek-body__section_height_inherit').exists()).toBeTruthy();
        expect(css.rule('.ek-body__section_height_1-1').exists()).toBeTruthy();
    });
});
