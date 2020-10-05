import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box box-empty="..." />', () => {
    it('props box-empty', () => {
        const wrapper = shallow(<Box box-empty='auto' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_empty_auto"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_empty_hidden:empty').exists()).toBeTruthy();
    });
});
