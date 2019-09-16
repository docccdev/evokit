import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../src';

describe('<Image image-round="..." />', () => {
    it('props image-round', () => {
        const wrapper = shallow(<Image image-round='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_round_full"/>');
    });

    it('extend 2 props image-round', () => {
        const wrapper = shallow(<Image image-round='xs xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<img class="ek-image ek-image_round-top-left_xs ek-image_round-bottom-right_xs ek-image_round-top-right_xl ek-image_round-bottom-left_xl"/>'
        );
    });

    it('extend 3 props image-round', () => {
        const wrapper = shallow(<Image image-round='xs xl m' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<img class="ek-image ek-image_round-top-left_xs ek-image_round-top-right_xl ek-image_round-bottom-left_xl ek-image_round-bottom-right_m"/>'
        );
    });

    it('extend 4 props image-round', () => {
        const wrapper = shallow(<Image image-round='s m l xl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual(
            '<img class="ek-image ek-image_round-top-left_s ek-image_round-top-right_m ek-image_round-bottom-right_l ek-image_round-bottom-left_xl"/>'
        );
    });

    it('props image-round-top-left', () => {
        const wrapper = shallow(<Image image-round-top-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_round-top-left_full"/>');
    });

    it('props image-round-top-right', () => {
        const wrapper = shallow(<Image image-round-top-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_round-top-right_full"/>');
    });

    it('props image-round-bottom-left', () => {
        const wrapper = shallow(<Image image-round-bottom-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_round-bottom-left_full"/>');
    });

    it('props image-round-bottom-right', () => {
        const wrapper = shallow(<Image image-round-bottom-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<img class="ek-image ek-image_round-bottom-right_full"/>');
    });

    describe("DEPRECATED props", () => {
        it('props image-round-top', () => {
            const wrapper = shallow(<Image image-round-top='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<img class="ek-image ek-image_round-top_full"/>');
        });

        it('props image-round-right', () => {
            const wrapper = shallow(<Image image-round-right='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<img class="ek-image ek-image_round-right_full"/>');
        });

        it('props image-round-bottom', () => {
            const wrapper = shallow(<Image image-round-bottom='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<img class="ek-image ek-image_round-bottom_full"/>');
        });

        it('props image-round-left', () => {
            const wrapper = shallow(<Image image-round-left='full' />);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.html()).toEqual('<img class="ek-image ek-image_round-left_full"/>');
        });
    });
});
