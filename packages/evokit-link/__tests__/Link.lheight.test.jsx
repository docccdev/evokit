import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Link } from '../src';

describe('<Link link-lheight="..." />', () => {
    it('props link-lheight', () => {
        const wrapper = shallow(<Link link-lheight='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_lheight_value"></a>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-link_lheight_default').exists()).toBeTruthy();
        expect(css.rule('.ek-link_lheight_medium').exists()).toBeTruthy();
        expect(css.rule('.ek-link_lheight_large').exists()).toBeTruthy();
    });
});
