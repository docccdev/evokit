import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../src';

describe('<Box box-round="..." />', () => {
    it('props box-round', () => {
        const wrapper = shallow(<Box box-round='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_round_full"></div>');
    });

    it('extend 2 props box-round', () => {
        const wrapper = shallow(<Box box-round='xs xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_round-top-left_xs ek-box_round-bottom-right_xs ek-box_round-top-right_xl ek-box_round-bottom-left_xl"></div>'
        );
    });

    it('extend 3 props box-round', () => {
        const wrapper = shallow(<Box box-round='xs xl m' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_round-top-left_xs ek-box_round-top-right_xl ek-box_round-bottom-left_xl ek-box_round-bottom-right_m"></div>'
        );
    });

    it('extend 4 props box-round', () => {
        const wrapper = shallow(<Box box-round='s m l xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<div class="ek-box ek-box_round-top-left_s ek-box_round-top-right_m ek-box_round-bottom-right_l ek-box_round-bottom-left_xl"></div>'
        );
    });

    it('props box-round-top-left', () => {
        const wrapper = shallow(<Box box-round-top-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_round-top-left_full"></div>');
    });

    it('props box-round-top-right', () => {
        const wrapper = shallow(<Box box-round-top-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_round-top-right_full"></div>');
    });

    it('props box-round-bottom-left', () => {
        const wrapper = shallow(<Box box-round-bottom-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_round-bottom-left_full"></div>');
    });

    it('props box-round-bottom-right', () => {
        const wrapper = shallow(<Box box-round-bottom-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-box ek-box_round-bottom-right_full"></div>');
    });

    describe("DEPRECATED props", () => {
        it('props box-round-top', () => {
            const wrapper = shallow(<Box box-round-top='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<div class="ek-box ek-box_round-top_full"></div>');
        });

        it('props box-round-right', () => {
            const wrapper = shallow(<Box box-round-right='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<div class="ek-box ek-box_round-right_full"></div>');
        });

        it('props box-round-bottom', () => {
            const wrapper = shallow(<Box box-round-bottom='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<div class="ek-box ek-box_round-bottom_full"></div>');
        });

        it('props box-round-left', () => {
            const wrapper = shallow(<Box box-round-left='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<div class="ek-box ek-box_round-left_full"></div>');
        });
    });
});
