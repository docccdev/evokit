import React from 'react';
import { shallow } from 'enzyme';
import { Picture, PictureItem } from '../src';

describe('<Picture />', () => {
    it('render', () => {
        const wrapper = shallow(<Picture />);
        const wrapperItem = shallow(<PictureItem src='test.jpg' alt='test alt' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperItem).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture')).toBeTruthy();

        expect(wrapperItem.contains(<img className='ek-picture__item' src='test.jpg' alt='test alt' />)).toBeTruthy();
        expect(wrapperItem.render().hasClass('ek-picture__item')).toBeTruthy();
    });

    it('props picture-fit', () => {
        const wrapper = shallow(<Picture picture-fit='contain' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_fit_contain' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_fit_contain')).toBeTruthy();
    });

    it('props picture-round', () => {
        const wrapper = shallow(<Picture picture-round='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_round_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_round_full')).toBeTruthy();
    });

    it('props picture-round-top', () => {
        const wrapper = shallow(<Picture picture-round-top='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_round-top_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_round-top_full')).toBeTruthy();
    });

    it('props picture-round-right', () => {
        const wrapper = shallow(<Picture picture-round-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_round-right_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_round-right_full')).toBeTruthy();
    });

    it('props picture-round-bottom', () => {
        const wrapper = shallow(<Picture picture-round-bottom='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_round-bottom_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_round-bottom_full')).toBeTruthy();
    });

    it('props picture-round-left', () => {
        const wrapper = shallow(<Picture picture-round-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_round-left_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_round-left_full')).toBeTruthy();
    });

    it('props picture-round-top-left', () => {
        const wrapper = shallow(<Picture picture-round-top-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_round-top-left_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_round-top-left_full')).toBeTruthy();
    });

    it('props picture-round-top-right', () => {
        const wrapper = shallow(<Picture picture-round-top-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_round-top-right_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_round-top-right_full')).toBeTruthy();
    });

    it('props picture-round-bottom-left', () => {
        const wrapper = shallow(<Picture picture-round-bottom-left='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_round-bottom-left_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_round-bottom-left_full')).toBeTruthy();
    });

    it('props picture-round-bottom-right', () => {
        const wrapper = shallow(<Picture picture-round-bottom-right='full' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_round-bottom-right_full' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_round-bottom-right_full')).toBeTruthy();
    });

    it('props picture-border', () => {
        const wrapper = shallow(<Picture picture-border='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_border_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_border_THEME_NAME')).toBeTruthy();
    });

    it('props picture-border-top', () => {
        const wrapper = shallow(<Picture picture-border-top='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_border-top_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_border-top_THEME_NAME')).toBeTruthy();
    });

    it('props picture-border-right', () => {
        const wrapper = shallow(<Picture picture-border-right='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_border-right_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_border-right_THEME_NAME')).toBeTruthy();
    });

    it('props picture-border-bottom', () => {
        const wrapper = shallow(<Picture picture-border-bottom='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_border-bottom_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_border-bottom_THEME_NAME')).toBeTruthy();
    });

    it('props picture-border-left', () => {
        const wrapper = shallow(<Picture picture-border-left='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_border-left_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_border-left_THEME_NAME')).toBeTruthy();
    });

    it('props picture-border-tb', () => {
        const wrapper = shallow(<Picture picture-border-tb='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_border-tb_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_border-tb_THEME_NAME')).toBeTruthy();
    });

    it('props picture-border-lr', () => {
        const wrapper = shallow(<Picture picture-border-lr='THEME_NAME' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<picture className='ek-picture ek-picture_border-lr_THEME_NAME' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-picture ek-picture_border-lr_THEME_NAME')).toBeTruthy();
    });
});
