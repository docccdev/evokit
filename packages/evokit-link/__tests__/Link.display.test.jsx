import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Link } from '../src';

describe('<Link link-display="..." />', () => {
    it('props link-display', () => {
        const wrapper = shallow(<Link link-display='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_display_value"></a>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-link_display_none').exists()).toBeTruthy();
        expect(css.rule('.ek-link_display_inline').exists()).toBeTruthy();
    });
});
