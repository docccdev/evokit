import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import theme from '../theme.css';
import { Link } from '../src';

describe('<Link link-color="..." />', () => {
    it('props link-color', () => {
        const wrapper = shallow(<Link link-color='TEMPLATE_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<a class="ek-link ek-link_color_TEMPLATE_NAME"></a>');
    });

    it('css', () => {
        const css = barista({ content: theme });

        expect(css.rule('.ek-link_color_TEMPLATE_NAME').exists()).toBeTruthy();
    });
});
