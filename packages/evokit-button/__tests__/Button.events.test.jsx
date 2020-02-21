import React from 'react';
import { shallow } from 'enzyme';
import barista from 'seed-barista';
import style from '../style.css';
import { Button } from '../src';

describe('<Button button-events="..." />', () => {
    it('props button-events', () => {
        const wrapper = shallow(<Button button-events='value' />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.html()).toEqual('<button class="ek-button ek-button_events_value"></button>');
    });

    it('css', () => {
        const css = barista({ content: style });

        expect(css.rule('.ek-button_events_none').exists()).toBeTruthy();
        expect(css.rule('.ek-button_events_auto').exists()).toBeTruthy();
    });
});
