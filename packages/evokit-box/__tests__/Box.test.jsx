import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../index.js';

describe('<Box />', () => {
    it('render', () => {
        const wrapper = shallow(<Box />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box')).toBeTruthy();
    });

    it('props className', () => {
        const wrapper = shallow(<Box className='ololo' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ololo' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box')).toBeTruthy();
        expect(wrapper.render().hasClass('ololo')).toBeTruthy();
    });

    it('props box-tag', () => {
        const wrapper = shallow(<Box box-tag='span' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-box' />)).toBeTruthy();
        expect(wrapper.render().is('span')).toBeTruthy();
    });

    it('props box-align', () => {
        const wrapper = shallow(<Box box-align='left' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_align_left' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box_align_left')).toBeTruthy();
    });

    it('props box-width', () => {
        const wrapper = shallow(<Box box-width='1-7' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_width_1-7' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box_width_1-7')).toBeTruthy();
    });

    it('props box-height', () => {
        const wrapper = shallow(<Box box-height='1-1' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_height_1-1' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box_height_1-1')).toBeTruthy();
    });

    it('props box-display', () => {
        const wrapper = shallow(<Box box-display='inline-block' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_display_inline-block' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box_display_inline-block')).toBeTruthy();
    });

    it('props box-position', () => {
        const wrapper = shallow(<Box box-position='absolute' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_position_absolute' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box_position_absolute')).toBeTruthy();
    });

    it('props box-place', () => {
        const wrapper = shallow(<Box box-place='center' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_place_center' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box_place_center')).toBeTruthy();
    });

    it('props box-overflow', () => {
        const wrapper = shallow(<Box box-overflow='hidden' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_overflow_hidden' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box_overflow_hidden')).toBeTruthy();
    });

    it('props box-round', () => {
        const wrapper = shallow(<Box box-round='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_round_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box_round_full')).toBeTruthy();
    });

    it('props box-round-top', () => {
        const wrapper = shallow(<Box box-round-top='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_round-top_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_round-top_full')).toBeTruthy();
    });

    it('props box-round-right', () => {
        const wrapper = shallow(<Box box-round-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_round-right_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_round-right_full')).toBeTruthy();
    });

    it('props box-round-bottom', () => {
        const wrapper = shallow(<Box box-round-bottom='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_round-bottom_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_round-bottom_full')).toBeTruthy();
    });

    it('props box-round-left', () => {
        const wrapper = shallow(<Box box-round-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_round-left_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_round-left_full')).toBeTruthy();
    });

    it('props box-round-top-left', () => {
        const wrapper = shallow(<Box box-round-top-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_round-top-left_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_round-top-left_full')).toBeTruthy();
    });

    it('props box-round-top-right', () => {
        const wrapper = shallow(<Box box-round-top-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_round-top-right_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_round-top-right_full')).toBeTruthy();
    });

    it('props box-round-bottom-left', () => {
        const wrapper = shallow(<Box box-round-bottom-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_round-bottom-left_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_round-bottom-left_full')).toBeTruthy();
    });

    it('props box-round-bottom-right', () => {
        const wrapper = shallow(<Box box-round-bottom-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_round-bottom-right_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_round-bottom-right_full')).toBeTruthy();
    });

    it('props box-border', () => {
        const wrapper = shallow(<Box box-border='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_border_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box_border_THEME_NAME')).toBeTruthy();
    });

    it('props box-border-top', () => {
        const wrapper = shallow(<Box box-border-top='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_border-top_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_border-top_THEME_NAME')).toBeTruthy();
    });

    it('props box-border-right', () => {
        const wrapper = shallow(<Box box-border-right='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_border-right_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_border-right_THEME_NAME')).toBeTruthy();
    });

    it('props box-border-bottom', () => {
        const wrapper = shallow(<Box box-border-bottom='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_border-bottom_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_border-bottom_THEME_NAME')).toBeTruthy();
    });

    it('props box-border-left', () => {
        const wrapper = shallow(<Box box-border-left='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_border-left_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_border-left_THEME_NAME')).toBeTruthy();
    });

    it('props box-border-tb', () => {
        const wrapper = shallow(<Box box-border-tb='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_border-tb_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_border-tb_THEME_NAME')).toBeTruthy();
    });

    it('props box-border-lr', () => {
        const wrapper = shallow(<Box box-border-lr='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_border-lr_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_border-lr_THEME_NAME')).toBeTruthy();
    });

    it('props box-background', () => {
        const wrapper = shallow(<Box box-background='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_background_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_background_THEME_NAME')).toBeTruthy();
    });

    it('props box-margin', () => {
        const wrapper = shallow(<Box box-margin='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_margin_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_margin_xxl')).toBeTruthy();
    });

    it('props box-margin-top', () => {
        const wrapper = shallow(<Box box-margin-top='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_margin-top_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_margin-top_xxl')).toBeTruthy();
    });

    it('props box-margin-right', () => {
        const wrapper = shallow(<Box box-margin-right='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_margin-right_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_margin-right_xxl')).toBeTruthy();
    });

    it('props box-margin-bottom', () => {
        const wrapper = shallow(<Box box-margin-bottom='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_margin-bottom_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_margin-bottom_xxl')).toBeTruthy();
    });

    it('props box-margin-left', () => {
        const wrapper = shallow(<Box box-margin-left='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_margin-left_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_margin-left_xxl')).toBeTruthy();
    });

    it('props box-margin-lr', () => {
        const wrapper = shallow(<Box box-margin-lr='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_margin-lr_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_margin-lr_xxl')).toBeTruthy();
    });

    it('props box-margin-tb', () => {
        const wrapper = shallow(<Box box-margin-tb='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_margin-tb_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_margin-tb_xxl')).toBeTruthy();
    });

    it('props box-padding', () => {
        const wrapper = shallow(<Box box-padding='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_padding_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_padding_xxl')).toBeTruthy();
    });

    it('props box-padding-top', () => {
        const wrapper = shallow(<Box box-padding-top='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_padding-top_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_padding-top_xxl')).toBeTruthy();
    });

    it('props box-padding-right', () => {
        const wrapper = shallow(<Box box-padding-right='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_padding-right_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_padding-right_xxl')).toBeTruthy();
    });

    it('props box-padding-bottom', () => {
        const wrapper = shallow(<Box box-padding-bottom='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_padding-bottom_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_padding-bottom_xxl')).toBeTruthy();
    });

    it('props box-padding-left', () => {
        const wrapper = shallow(<Box box-padding-left='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_padding-left_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_padding-left_xxl')).toBeTruthy();
    });

    it('props box-padding-lr', () => {
        const wrapper = shallow(<Box box-padding-lr='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_padding-lr_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_padding-lr_xxl')).toBeTruthy();
    });

    it('props box-padding-tb', () => {
        const wrapper = shallow(<Box box-padding-tb='xxl' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-box ek-box_padding-tb_xxl' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-box ek-box_padding-tb_xxl')).toBeTruthy();
    });
});
