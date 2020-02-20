import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { ${BLOCK_NAME_CAPITALIZE} } from '../src';

describe('<${BLOCK_NAME_CAPITALIZE} />', () => {
    it('render', () => {
        const wrapper = shallow(<${BLOCK_NAME_CAPITALIZE} />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-${BLOCK_NAME}"></div>');
    });

    it('props className', () => {
        const wrapper = shallow(<${BLOCK_NAME_CAPITALIZE} className='ololo' />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<div class="ek-${BLOCK_NAME} ololo"></div>');
    });

    it('props ${BLOCK_NAME}-as', () => {
        const wrapper = shallow(<${BLOCK_NAME_CAPITALIZE} ${BLOCK_NAME}-as='span' />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-${BLOCK_NAME}"></span>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-${BLOCK_NAME}').exists()).toBeTruthy();
    });
});
