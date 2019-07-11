import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../index.js';

describe('<Image />', () => {
    it('render', () => {
        const wrapper = shallow(<Image src='test.jpg' alt='test alt' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image' src='test.jpg' alt='test alt' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image')).toBeTruthy();
    });

    it('props className', () => {
        const wrapper = shallow(<Image className='ololo' src='' alt='' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ololo' src='' alt='' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image')).toBeTruthy();
        expect(wrapper.render().hasClass('ololo')).toBeTruthy();
    });

    it('props image-tag', () => {
        const wrapper = shallow(<Image image-tag='span' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-image' />)).toBeTruthy();
        expect(wrapper.render().is('span')).toBeTruthy();
    });

    it('props image-align', () => {
        const wrapper = shallow(<Image image-align='left' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_align_left' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image_align_left')).toBeTruthy();
    });

    it('props image-valign', () => {
        const wrapper = shallow(<Image image-valign='middle' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_valign_middle' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image_valign_middle')).toBeTruthy();
    });

    it('props image-mirror', () => {
        const wrapper = shallow(<Image image-mirror='xy' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_mirror_xy' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image_mirror_xy')).toBeTruthy();
    });

    it('props image-fit', () => {
        const wrapper = shallow(<Image image-fit='cover' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_fit_cover' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image_fit_cover')).toBeTruthy();
    });

    it('props image-width', () => {
        const wrapper = shallow(<Image image-width='1-7' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_width_1-7' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image_width_1-7')).toBeTruthy();
    });

    it('props image-round', () => {
        const wrapper = shallow(<Image image-round='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_round_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image_round_full')).toBeTruthy();
    });

    it('props image-round-top', () => {
        const wrapper = shallow(<Image image-round-top='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_round-top_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_round-top_full')).toBeTruthy();
    });

    it('props image-round-right', () => {
        const wrapper = shallow(<Image image-round-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_round-right_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_round-right_full')).toBeTruthy();
    });

    it('props image-round-bottom', () => {
        const wrapper = shallow(<Image image-round-bottom='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_round-bottom_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_round-bottom_full')).toBeTruthy();
    });

    it('props image-round-left', () => {
        const wrapper = shallow(<Image image-round-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_round-left_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_round-left_full')).toBeTruthy();
    });

    it('props image-round-top-left', () => {
        const wrapper = shallow(<Image image-round-top-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_round-top-left_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_round-top-left_full')).toBeTruthy();
    });

    it('props image-round-top-right', () => {
        const wrapper = shallow(<Image image-round-top-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_round-top-right_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_round-top-right_full')).toBeTruthy();
    });

    it('props image-round-bottom-left', () => {
        const wrapper = shallow(<Image image-round-bottom-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_round-bottom-left_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_round-bottom-left_full')).toBeTruthy();
    });

    it('props image-round-bottom-right', () => {
        const wrapper = shallow(<Image image-round-bottom-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_round-bottom-right_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_round-bottom-right_full')).toBeTruthy();
    });

    it('props image-border', () => {
        const wrapper = shallow(<Image image-border='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_border_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image_border_THEME_NAME')).toBeTruthy();
    });

    it('props image-border-top', () => {
        const wrapper = shallow(<Image image-border-top='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_border-top_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_border-top_THEME_NAME')).toBeTruthy();
    });

    it('props image-border-right', () => {
        const wrapper = shallow(<Image image-border-right='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_border-right_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_border-right_THEME_NAME')).toBeTruthy();
    });

    it('props image-border-bottom', () => {
        const wrapper = shallow(<Image image-border-bottom='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_border-bottom_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_border-bottom_THEME_NAME')).toBeTruthy();
    });

    it('props image-border-left', () => {
        const wrapper = shallow(<Image image-border-left='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_border-left_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_border-left_THEME_NAME')).toBeTruthy();
    });

    it('props image-border-tb', () => {
        const wrapper = shallow(<Image image-border-tb='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_border-tb_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_border-tb_THEME_NAME')).toBeTruthy();
    });

    it('props image-border-lr', () => {
        const wrapper = shallow(<Image image-border-lr='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<img className='ek-image ek-image_border-lr_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-image ek-image_border-lr_THEME_NAME')).toBeTruthy();
    });
});
