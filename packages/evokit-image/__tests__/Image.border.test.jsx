import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../theme.css';
import { Image } from '../src';

describe('<Image image-border="..." />', () => {
    it('props image-border', () => {
        const wrapper = shallow(<Image image-border='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_border_THEME_NAME"/>');
    });

    it('props image-border-top', () => {
        const wrapper = shallow(<Image image-border-top='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_border-top_THEME_NAME"/>');
    });

    it('props image-border-right', () => {
        const wrapper = shallow(<Image image-border-right='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_border-right_THEME_NAME"/>');
    });

    it('props image-border-bottom', () => {
        const wrapper = shallow(<Image image-border-bottom='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_border-bottom_THEME_NAME"/>');
    });

    it('props image-border-left', () => {
        const wrapper = shallow(<Image image-border-left='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_border-left_THEME_NAME"/>');
    });

    describe("DEPRECATED props", () => {
        it('props image-border-tb', () => {
            const wrapper = shallow(<Image image-border-tb='THEME_NAME' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<img class="ek-image ek-image_border-tb_THEME_NAME"/>');
        });

        it('props image-border-lr', () => {
            const wrapper = shallow(<Image image-border-lr='THEME_NAME' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<img class="ek-image ek-image_border-lr_THEME_NAME"/>');
        });
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_border_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-image_border-top_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-image_border-right_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-image_border-bottom_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-image_border-left_TEMPLATE_NAME').exists()).toBeTruthy();
        // DEPRECATED
        expect(css.rule('.ek-image_border-tb_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-image_border-lr_TEMPLATE_NAME').exists()).toBeTruthy();
    });
});
