import React from 'react';
import { shallow } from 'enzyme';
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
    });
});
