import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
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

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-box_round_none').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_full').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_round-top-left_none').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_full').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-left_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_round-top-right_none').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_full').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-top-right_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_round-bottom-left_none').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_full').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-left_5xl').exists()).toBeTruthy();

        expect(css.rule('.ek-box_round-bottom-right_none').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_full').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_xxs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_xs').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_s').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_m').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_l').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_xxl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_3xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_4xl').exists()).toBeTruthy();
        expect(css.rule('.ek-box_round-bottom-right_5xl').exists()).toBeTruthy();
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

        it('css', () => {
            const css = barista({ content: style });

            expect(css.rule('.ek-box_round-top_none').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-top_full').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-top_xxs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-top_xs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-top_s').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-top_m').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-top_l').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-top_xl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-top_xxl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-top_3xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_round-top_4xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_round-top_5xl').exists()).toBeFalsy();

            expect(css.rule('.ek-box_round-right_none').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-right_full').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-right_xxs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-right_xs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-right_s').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-right_m').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-right_l').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-right_xl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-right_xxl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-right_3xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_round-right_4xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_round-right_5xl').exists()).toBeFalsy();

            expect(css.rule('.ek-box_round-bottom_none').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-bottom_full').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-bottom_xxs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-bottom_xs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-bottom_s').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-bottom_m').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-bottom_l').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-bottom_xl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-bottom_xxl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-bottom_3xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_round-bottom_4xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_round-bottom_5xl').exists()).toBeFalsy();

            expect(css.rule('.ek-box_round-left_none').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-left_full').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-left_xxs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-left_xs').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-left_s').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-left_m').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-left_l').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-left_xl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-left_xxl').exists()).toBeTruthy();
            expect(css.rule('.ek-box_round-left_3xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_round-left_4xl').exists()).toBeFalsy();
            expect(css.rule('.ek-box_round-left_5xl').exists()).toBeFalsy();
        });
    });
});
