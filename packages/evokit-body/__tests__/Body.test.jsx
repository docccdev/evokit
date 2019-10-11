import React from 'react';
import { shallow } from 'enzyme';
import { Body, BodySection } from '../src';

describe('<Body />', () => {
    it('render', () => {
        const wrapper = shallow(<Body />);
        const wrapperSection = shallow(<BodySection />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperSection).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body"></body>');
        expect(wrapperSection.html()).toEqual('<div class="ek-body__section"></div>');
    });

    it('props className', () => {
        const wrapper = shallow(<Body className='ololo' />);
        const wrapperSection = shallow(<BodySection className='ololo' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperSection).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<body class="ek-body ololo"></body>');
        expect(wrapperSection.html()).toEqual('<div class="ek-body__section ololo"></div>');
    });

    it('props body-tag', () => {
        const wrapper = shallow(<Body body-tag='span' />);
        const wrapperSection = shallow(<BodySection body-section-tag='span' />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapperSection).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<span class="ek-body"></span>');
        expect(wrapperSection.html()).toEqual('<span class="ek-body__section"></span>');
    });
});
