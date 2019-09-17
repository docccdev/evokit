import React from 'react';
import { shallow } from 'enzyme';
import { Picture } from '../src';

describe('<Picture picture-round="..." />', () => {
    it('props picture-round', () => {
        const wrapper = shallow(<Picture picture-round='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_round_full"></picture>');
    });

    it('extend 2 props picture-round', () => {
        const wrapper = shallow(<Picture picture-round='xs xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<picture class="ek-picture ek-picture_round-top-left_xs ek-picture_round-bottom-right_xs ek-picture_round-top-right_xl ek-picture_round-bottom-left_xl"></picture>'
        );
    });

    it('extend 3 props picture-round', () => {
        const wrapper = shallow(<Picture picture-round='xs xl m' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<picture class="ek-picture ek-picture_round-top-left_xs ek-picture_round-top-right_xl ek-picture_round-bottom-left_xl ek-picture_round-bottom-right_m"></picture>'
        );
    });

    it('extend 4 props picture-round', () => {
        const wrapper = shallow(<Picture picture-round='s m l xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<picture class="ek-picture ek-picture_round-top-left_s ek-picture_round-top-right_m ek-picture_round-bottom-right_l ek-picture_round-bottom-left_xl"></picture>'
        );
    });

    it('props picture-round-top-left', () => {
        const wrapper = shallow(<Picture picture-round-top-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_round-top-left_full"></picture>');
    });

    it('props picture-round-top-right', () => {
        const wrapper = shallow(<Picture picture-round-top-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_round-top-right_full"></picture>');
    });

    it('props picture-round-bottom-left', () => {
        const wrapper = shallow(<Picture picture-round-bottom-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_round-bottom-left_full"></picture>');
    });

    it('props picture-round-bottom-right', () => {
        const wrapper = shallow(<Picture picture-round-bottom-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_round-bottom-right_full"></picture>');
    });

    describe("DEPRECATED props", () => {
        it('props picture-round-top', () => {
            const wrapper = shallow(<Picture picture-round-top='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_round-top_full"></picture>');
        });

        it('props picture-round-right', () => {
            const wrapper = shallow(<Picture picture-round-right='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_round-right_full"></picture>');
        });

        it('props picture-round-bottom', () => {
            const wrapper = shallow(<Picture picture-round-bottom='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_round-bottom_full"></picture>');
        });

        it('props picture-round-left', () => {
            const wrapper = shallow(<Picture picture-round-left='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<picture class="ek-picture ek-picture_round-left_full"></picture>');
        });
    });
});
