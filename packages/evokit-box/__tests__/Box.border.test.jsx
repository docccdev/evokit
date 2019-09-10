import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-border="..." />', () => {
    it('props box-border', () => {
        const wrapper = shallow(<Box box-border='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border_THEME_NAME"></div>');
    });

    it('props box-border-top', () => {
        const wrapper = shallow(<Box box-border-top='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-top_THEME_NAME"></div>');
    });

    it('props box-border-right', () => {
        const wrapper = shallow(<Box box-border-right='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-right_THEME_NAME"></div>');
    });

    it('props box-border-bottom', () => {
        const wrapper = shallow(<Box box-border-bottom='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-bottom_THEME_NAME"></div>');
    });

    it('props box-border-left', () => {
        const wrapper = shallow(<Box box-border-left='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-left_THEME_NAME"></div>');
    });

    it('props box-border-tb', () => {
        const wrapper = shallow(<Box box-border-tb='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-tb_THEME_NAME"></div>');
    });

    it('props box-border-lr', () => {
        const wrapper = shallow(<Box box-border-lr='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-lr_THEME_NAME"></div>');
    });
});
