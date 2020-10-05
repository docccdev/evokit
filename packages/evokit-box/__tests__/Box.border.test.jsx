import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import theme from '../theme.css';
import { Box } from '../src';

describe('<Box box-border="..." />', () => {
    it('props box-border', () => {
        const wrapper = shallow(<Box box-border='TEMPLATE_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border_TEMPLATE_NAME"></div>');
    });

    it('props box-border-top', () => {
        const wrapper = shallow(<Box box-border-top='TEMPLATE_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-top_TEMPLATE_NAME"></div>');
    });

    it('props box-border-right', () => {
        const wrapper = shallow(<Box box-border-right='TEMPLATE_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-right_TEMPLATE_NAME"></div>');
    });

    it('props box-border-bottom', () => {
        const wrapper = shallow(<Box box-border-bottom='TEMPLATE_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-bottom_TEMPLATE_NAME"></div>');
    });

    it('props box-border-left', () => {
        const wrapper = shallow(<Box box-border-left='TEMPLATE_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-left_TEMPLATE_NAME"></div>');
    });

    it('css', () => {
        const css = barista({ content: theme });

        expect(css.rule('.ek-box_border_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-box_border-top_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-box_border-right_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-box_border-bottom_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-box_border-left_TEMPLATE_NAME').exists()).toBeTruthy();

        expect(css.rule('.ek-box_border-color_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-box_border-color-top_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-box_border-color-right_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-box_border-color-bottom_TEMPLATE_NAME').exists()).toBeTruthy();
        expect(css.rule('.ek-box_border-color-left_TEMPLATE_NAME').exists()).toBeTruthy();
    });

    describe("DEPRECATED props", () => {
        it('props box-border-tb', () => {
            const wrapper = shallow(<Box box-border-tb='TEMPLATE_NAME' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-tb_TEMPLATE_NAME"></div>');
        });

        it('props box-border-lr', () => {
            const wrapper = shallow(<Box box-border-lr='TEMPLATE_NAME' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<div class="ek-box ek-box_border-lr_TEMPLATE_NAME"></div>');
        });

        it('css', () => {
            const css = barista({ content: theme });

            expect(css.rule('.ek-box_border-tb_TEMPLATE_NAME').exists()).toBeTruthy();
            expect(css.rule('.ek-box_border-lr_TEMPLATE_NAME').exists()).toBeTruthy();
        });
    });
});
