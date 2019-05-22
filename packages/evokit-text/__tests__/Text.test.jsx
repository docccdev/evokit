import React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../index.js';

describe('<Text />', () => {
    it('render', () => {
        const wrapper = shallow(<Text>Hello World!</Text>);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text'>Hello World!</span>)).toBeTruthy();
        expect(wrapper.contains(<span className='text'>Hello World!</span>)).toBeFalsy();
        expect(wrapper.contains(<span>Hello World!</span>)).toBeFalsy();
        expect(wrapper.contains(<span></span>)).toBeFalsy();

        expect(wrapper.render().hasClass('ek-text')).toBeTruthy();
        expect(wrapper.render().hasClass('text')).toBeFalsy();
    });

    it('props className', () => {
        const wrapper = shallow(<Text className='ololo' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text ololo' />)).toBeTruthy();
        expect(wrapper.contains(<span className='ololo ek-text' />)).toBeFalsy();
        expect(wrapper.contains(<span className='ololo' />)).toBeFalsy();
    });

    it('props text-tag', () => {
        const wrapper = shallow(<Text text-tag='div' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<div className='ek-text' />)).toBeTruthy();
        expect(wrapper.contains(<span className='ek-text' />)).toBeFalsy();

        expect(wrapper.render().is('div')).toBeTruthy();
        expect(wrapper.render().is('span')).toBeFalsy();
    });

    it('props text-color', () => {
        const wrapper = shallow(<Text text-color='default' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text ek-text_color_default' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-text_color_default')).toBeTruthy();
    });

    it('props text-size', () => {
        const wrapper = shallow(<Text text-size='h1' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text ek-text_size_h1' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-text_size_h1')).toBeTruthy();
    });

    it('props text-weight', () => {
        const wrapper = shallow(<Text text-weight='bold' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text ek-text_weight_bold' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-text_weight_bold')).toBeTruthy();
    });

    it('props text-align', () => {
        const wrapper = shallow(<Text text-align='center' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text ek-text_align_center' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-text_align_center')).toBeTruthy();
    });

    it('props text-valign', () => {
        const wrapper = shallow(<Text text-valign='middle' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text ek-text_valign_middle' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-text_valign_middle')).toBeTruthy();
    });

    it('props text-wrap', () => {
        const wrapper = shallow(<Text text-wrap='nowrap' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text ek-text_wrap_nowrap' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-text_wrap_nowrap')).toBeTruthy();
    });

    it('props text-style', () => {
        const wrapper = shallow(<Text text-style='strike' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text ek-text_style_strike' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-text_style_strike')).toBeTruthy();
    });

    it('props text-transform', () => {
        const wrapper = shallow(<Text text-transform='uppercase' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text ek-text_transform_uppercase' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-text_transform_uppercase')).toBeTruthy();
    });

    it('props text-lheight', () => {
        const wrapper = shallow(<Text text-lheight='medium' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.contains(<span className='ek-text ek-text_lheight_medium' />)).toBeTruthy();
        expect(wrapper.render().hasClass('ek-text_lheight_medium')).toBeTruthy();
    });
});
