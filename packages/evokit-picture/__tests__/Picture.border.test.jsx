import React from 'react';
import { shallow } from 'enzyme';
import { Picture } from '../src';

describe('<Picture picture-border="..." />', () => {
    it('props picture-border', () => {
        const wrapper = shallow(<Picture picture-border='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_border_THEME_NAME"></picture>');
    });

    it('extend 2 props picture-border', () => {
        const wrapper = shallow(<Picture picture-border='THEME_NAME xs' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_border-color_THEME_NAME ek-picture_border-width_xs"></picture>');
    });

    it('extend 3 props picture-border', () => {
        const wrapper = shallow(<Picture picture-border='THEME_NAME xs solid' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_border-color_THEME_NAME ek-picture_border-width_xs ek-picture_border-style_solid"></picture>');
    });

    it('props picture-border-top', () => {
        const wrapper = shallow(<Picture picture-border-top='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_border-top_THEME_NAME"></picture>');
    });

    it('props picture-border-right', () => {
        const wrapper = shallow(<Picture picture-border-right='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_border-right_THEME_NAME"></picture>');
    });

    it('props picture-border-bottom', () => {
        const wrapper = shallow(<Picture picture-border-bottom='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_border-bottom_THEME_NAME"></picture>');
    });

    it('props picture-border-left', () => {
        const wrapper = shallow(<Picture picture-border-left='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_border-left_THEME_NAME"></picture>');
    });

    describe("DEPRECATED props", () => {
        it('props picture-border-tb', () => {
            const wrapper = shallow(<Picture picture-border-tb='THEME_NAME' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_border-tb_THEME_NAME"></picture>');
        });

        it('props picture-border-lr', () => {
            const wrapper = shallow(<Picture picture-border-lr='THEME_NAME' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_border-lr_THEME_NAME"></picture>');
        });
    });
});
