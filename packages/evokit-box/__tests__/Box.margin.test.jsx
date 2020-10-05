import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box box-margin="..." />', () => {
    it('props box-margin', () => {
        const wrapper = shallow(<Box box-margin='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_margin_xxl"></div>');
    });

    it('extend 2 props box-margin', () => {
        const wrapper = shallow(<Box box-margin='xs xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_margin-top_xs ek-box_margin-bottom_xs ek-box_margin-right_xl ek-box_margin-left_xl"></div>'
        );
    });

    it('extend 3 props box-margin', () => {
        const wrapper = shallow(<Box box-margin='xs xl m' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_margin-top_xs ek-box_margin-right_xl ek-box_margin-left_xl ek-box_margin-bottom_m"></div>'
        );
    });

    it('extend 4 props box-margin', () => {
        const wrapper = shallow(<Box box-margin='s m l xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_margin-top_s ek-box_margin-right_m ek-box_margin-bottom_l ek-box_margin-left_xl"></div>'
        );
    });

    it('props box-margin-top', () => {
        const wrapper = shallow(<Box box-margin-top='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_margin-top_xxl"></div>');
    });

    it('props box-margin-right', () => {
        const wrapper = shallow(<Box box-margin-right='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_margin-right_xxl"></div>');
    });

    it('props box-margin-bottom', () => {
        const wrapper = shallow(<Box box-margin-bottom='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_margin-bottom_xxl"></div>');
    });

    it('props box-margin-left', () => {
        const wrapper = shallow(<Box box-margin-left='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_margin-left_xxl"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_margin_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_margin-top_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-top_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-top_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-top_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-top_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-top_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-top_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-top_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-top_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-top_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_margin-right_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-right_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-right_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-right_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-right_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-right_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-right_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-right_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-right_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-right_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_margin-bottom_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-bottom_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-bottom_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-bottom_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-bottom_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-bottom_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-bottom_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-bottom_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-bottom_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-bottom_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_margin-left_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-left_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-left_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-left_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-left_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-left_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-left_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-left_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-left_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_margin-left_5xl').exists()).toBeTruthy();
    });

    describe("DEPRECATED props", () => {
        it('props box-margin-lr', () => {
            const wrapper = shallow(<Box box-margin-lr='xxl' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<div class="ek-box ek-box_margin-lr_xxl"></div>');
        });

        it('props box-margin-tb', () => {
            const wrapper = shallow(<Box box-margin-tb='xxl' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<div class="ek-box ek-box_margin-tb_xxl"></div>');
        });

        it('css', () => {
            const css = barista({ content: style });

            expect(css.rule('.ek-box_margin-tb_xxs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-tb_xs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-tb_s').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-tb_m').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-tb_l').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-tb_xl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-tb_xxl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-tb_3xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_margin-tb_4xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_margin-tb_5xl').exists()).toBeFalsy();

            expect(css.rule('.ek-box_margin-lr_xxs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-lr_xs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-lr_s').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-lr_m').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-lr_l').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-lr_xl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-lr_xxl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_margin-lr_3xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_margin-lr_4xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_margin-lr_5xl').exists()).toBeFalsy();
        });
    });
});
