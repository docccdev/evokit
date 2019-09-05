import React from 'react';
import { shallow, mount } from 'enzyme';
import { createBlock, withProps } from '../src';

describe("import { withProps } from 'evokit';", () => {
    it('default prop data', () => {
        const Block = createBlock('div', 'block');
        const BlockCustom = withProps(Block, { 'data-custom': 'ololo' });

        const wrapperBlock = shallow(<Block>ololo</Block>);
        const wrapperBlockCustom = shallow(<BlockCustom>ololo</BlockCustom>);

        expect(wrapperBlock).toMatchSnapshot();
        expect(wrapperBlockCustom).toMatchSnapshot();

        expect(wrapperBlockCustom.html()).toEqual('<div data-custom="ololo" class="ek-block">ololo</div>');
        expect(wrapperBlock.html()).toEqual('<div class="ek-block">ololo</div>');
    });

    it('default prop mod', () => {
        const Block = createBlock('div', 'block', ['color']);
        const BlockRed = withProps(Block, { 'block-color': 'red' });

        const wrapperBlock = shallow(<Block />);
        const wrapperBlockRed = shallow(<BlockRed />);

        expect(wrapperBlock).toMatchSnapshot();
        expect(wrapperBlockRed).toMatchSnapshot();

        expect(wrapperBlockRed.html()).toEqual('<div class="ek-block ek-block_color_red"></div>');
        expect(wrapperBlock.html()).toEqual('<div class="ek-block"></div>');
    });

    it('default prop children', () => {
        const Block = createBlock('div', 'block', ['color']);
        const BlockBabadook = withProps(Block, { children: 'Babadook' });

        const wrapperBlock = shallow(<Block>I am a block</Block>);
        const wrapperBlockBabadook = shallow(<BlockBabadook />);

        expect(wrapperBlock).toMatchSnapshot();
        expect(wrapperBlockBabadook).toMatchSnapshot();

        expect(wrapperBlockBabadook.html()).toEqual('<div class="ek-block">Babadook</div>');
        expect(wrapperBlock.html()).toEqual('<div class="ek-block">I am a block</div>');
    });

    it('createRef()', () => {
        const Block = createBlock('div', 'block');
        const BlockBabadook = withProps(Block, { children: 'Babadook' });
        const blockRef = React.createRef();
        const wrapper = mount(<><BlockBabadook ref={blockRef} /></>);

        expect(wrapper.find('div').text()).toEqual('Babadook');
        expect(wrapper.find('div').instance()).toEqual(blockRef.current);
    });

    it('DEPRECATED prop ref', () => {
        const Block = createBlock('div', 'block');
        const BlockBabadook = withProps(Block, { children: 'Babadook' });
        let blockRef = null;
        const wrapper = mount(<><BlockBabadook block-ref={(target) => { blockRef = target }} /></>);

        expect(wrapper.find('div').text()).toEqual('Babadook');
        expect(wrapper.find('div').instance()).toEqual(blockRef);
    });
});
