import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Box } from '../src';

describe('<Box box-padding="..." />', () => {
    it('props box-padding', () => {
        const wrapper = shallow(<Box box-padding='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_padding_xxl"></div>');
    });

    it('extend 2 props box-padding', () => {
        const wrapper = shallow(<Box box-padding='xs xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_padding-top_xs ek-box_padding-bottom_xs ek-box_padding-right_xl ek-box_padding-left_xl"></div>'
        );
    });

    it('extend 3 props box-padding', () => {
        const wrapper = shallow(<Box box-padding='xs xl m' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_padding-top_xs ek-box_padding-right_xl ek-box_padding-left_xl ek-box_padding-bottom_m"></div>'
        );
    });

    it('extend 4 props box-padding', () => {
        const wrapper = shallow(<Box box-padding='s m l xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_padding-top_s ek-box_padding-right_m ek-box_padding-bottom_l ek-box_padding-left_xl"></div>'
        );
    });

    it('props box-padding-top', () => {
        const wrapper = shallow(<Box box-padding-top='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_padding-top_xxl"></div>');
    });

    it('props box-padding-right', () => {
        const wrapper = shallow(<Box box-padding-right='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_padding-right_xxl"></div>');
    });

    it('props box-padding-bottom', () => {
        const wrapper = shallow(<Box box-padding-bottom='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_padding-bottom_xxl"></div>');
    });

    it('props box-padding-left', () => {
        const wrapper = shallow(<Box box-padding-left='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_padding-left_xxl"></div>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_padding_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_padding-top_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-top_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-top_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-top_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-top_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-top_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-top_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-top_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-top_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-top_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_padding-right_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-right_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-right_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-right_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-right_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-right_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-right_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-right_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-right_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-right_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_padding-bottom_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-bottom_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-bottom_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-bottom_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-bottom_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-bottom_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-bottom_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-bottom_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-bottom_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-bottom_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_padding-left_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-left_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-left_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-left_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-left_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-left_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-left_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-left_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-left_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_padding-left_5xl').exists()).toBeTruthy();
    });

    describe("DEPRECATED props", () => {
        it('props box-padding-lr', () => {
            const wrapper = shallow(<Box box-padding-lr='xxl' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<div class="ek-box ek-box_padding-lr_xxl"></div>');
        });

        it('props box-padding-tb', () => {
            const wrapper = shallow(<Box box-padding-tb='xxl' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<div class="ek-box ek-box_padding-tb_xxl"></div>');
        });

        it('css', () => {
            const css = barista({ content: style });

            expect(css.rule('.ek-box_padding-tb_xxs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-tb_xs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-tb_s').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-tb_m').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-tb_l').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-tb_xl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-tb_xxl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-tb_3xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_padding-tb_4xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_padding-tb_5xl').exists()).toBeFalsy();

            expect(css.rule('.ek-box_padding-lr_xxs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-lr_xs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-lr_s').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-lr_m').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-lr_l').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-lr_xl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-lr_xxl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_padding-lr_3xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_padding-lr_4xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_padding-lr_5xl').exists()).toBeFalsy();
        });
    });
});
