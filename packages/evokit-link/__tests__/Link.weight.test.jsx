import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Link } from '../src';

describe('<Link link-weight="..." />', () => {
    it('props link-weight', () => {
        const wrapper = shallow(<Link link-weight='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_weight_value"></a>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-link_weight_default').exists()).toBeTruthy();
        expect(css.rule('.ek-link_weight_thin').exists()).toBeTruthy();
        expect(css.rule('.ek-link_weight_light').exists()).toBeTruthy();
        expect(css.rule('.ek-link_weight_medium').exists()).toBeTruthy();
        expect(css.rule('.ek-link_weight_bold').exists()).toBeTruthy();
        expect(css.rule('.ek-link_weight_black').exists()).toBeTruthy();
    });
});
