import React from 'react';
import { shallow } from 'enzyme';
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
    });
});
