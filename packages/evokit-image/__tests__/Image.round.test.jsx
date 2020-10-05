import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
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

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-image_round-top-left_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-left_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-left_s').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-left_m').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-left_l').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-left_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-left_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-left_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-left_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-left_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-image_round-top-right_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-right_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-right_s').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-right_m').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-right_l').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-right_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-right_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-right_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-right_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top-right_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-image_round-bottom-right_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-right_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-right_s').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-right_m').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-right_l').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-right_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-right_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-right_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-right_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-right_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-image_round-bottom-left_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-left_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-left_s').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-left_m').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-left_l').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-left_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-left_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-left_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-left_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom-left_5xl').exists()).toBeTruthy();

        // DEPRECATED

        expect(css.rule('.ek-image_round-top_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top_s').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top_m').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top_l').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-top_3xl').exists()).toBeFalsy();
        expect(css.rule('.ek-image_round-top_4xl').exists()).toBeFalsy();
        expect(css.rule('.ek-image_round-top_5xl').exists()).toBeFalsy();

        expect(css.rule('.ek-image_round-right_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-right_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-right_s').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-right_m').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-right_l').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-right_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-right_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-right_3xl').exists()).toBeFalsy();
        expect(css.rule('.ek-image_round-right_4xl').exists()).toBeFalsy();
        expect(css.rule('.ek-image_round-right_5xl').exists()).toBeFalsy();

        expect(css.rule('.ek-image_round-bottom_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom_s').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom_m').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom_l').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-bottom_3xl').exists()).toBeFalsy();
        expect(css.rule('.ek-image_round-bottom_4xl').exists()).toBeFalsy();
        expect(css.rule('.ek-image_round-bottom_5xl').exists()).toBeFalsy();

        expect(css.rule('.ek-image_round-left_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-left_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-left_s').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-left_m').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-left_l').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-left_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-left_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-image_round-left_3xl').exists()).toBeFalsy();
        expect(css.rule('.ek-image_round-left_4xl').exists()).toBeFalsy();
        expect(css.rule('.ek-image_round-left_5xl').exists()).toBeFalsy();
    });
});
