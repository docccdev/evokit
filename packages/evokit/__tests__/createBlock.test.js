import React from 'react';
import { shallow, mount } from 'enzyme';
import { createBlock } from '../src';

describe("import { createBlock } from 'evokit';", () => {
    it('default', () => {
        const Block = createBlock('div', 'block');
        expect(Block.displayName).toBe('block');
        expect(shallow(<Block />).contains(<div className='ek-block'></div>)).toBeTruthy();
        expect(shallow(<Block>text</Block>).contains(<div className='ek-block'>text</div>)).toBeTruthy();
    });

    it('createRef()', () => {
        const Block = createBlock('div', 'block');
        const blockRef = React.createRef();
        const wrapper = mount(<><Block ref={blockRef}>ololo</Block></>);

        expect(wrapper.find('div').text()).toEqual('ololo');
        expect(wrapper.find('div').instance()).toEqual(blockRef.current);
    });

    it('DEPRECATED prop ref', () => {
        const Block = createBlock('div', 'block');
        let blockRef = null;
        const wrapper = mount(<><Block block-ref={(target) => { blockRef = target }}>ololo</Block></>);

        expect(wrapper.find('div').text()).toEqual('ololo');
        expect(wrapper.find('div').instance()).toEqual(blockRef);
    });

    it('elem', () => {
        const Element = createBlock('li', 'list__item');
        expect(shallow(<Element />).contains(<li className='ek-list__item'></li>)).toBeTruthy();
    });

    it('tag', () => {
        const Block = createBlock('span', 'block');
        expect(shallow(<Block />).contains(<span className='ek-block' />)).toBeTruthy();
    });

    it('mods', () => {
        const Block = createBlock('div', 'block', ['modName']);
        expect(
            shallow(<Block block-modName='modValue' />).contains(<div className='ek-block ek-block_modName_modValue' />)
        ).toBeTruthy();
    });

    it('blackhole', () => {
        const Block = createBlock('div', 'block', ['modName']);
        expect(
            shallow(<Block block-blackhole='sucks' block-modName='modValue' />).contains(<div className='ek-block ek-block_blackhole_sucks ek-block_modName_modValue' />)
        ).toBeTruthy();
    });

    it('with children', () => {
        const Block = createBlock('div', 'block');
        expect(shallow(<Block>ololo</Block>).contains(<div className='ek-block'>ololo</div>)).toBeTruthy();
    });

    describe("with props", () => {
        const Block = createBlock('div', 'block', ['modName']);
        const BlockItem = createBlock('div', 'block__item', ['elModName']);

        it('elem', () => {
            expect(
                shallow(<BlockItem block-item-elModName='elModValue' />).contains(<div className='ek-block__item ek-block__item_elModName_elModValue'></div>)
            ).toBeTruthy();
        });

        it('tag', () => {
            expect(shallow(<Block block-tag='span' />).contains(<span className='ek-block'></span>)).toBeTruthy();
        });

        it('mods', () => {
            expect(shallow(<Block block-modName='modValue' />).contains(<div className='ek-block ek-block_modName_modValue'></div>)).toBeTruthy();
        });

        it('with className', () => {
            expect(
                shallow(
                    <Block block-modName='modValue' className='class-name' />
                ).contains(
                    <div className='ek-block ek-block_modName_modValue class-name'></div>
                )
            ).toBeTruthy();
        });

        describe("custom class prefix", () => {
            it('default', () => {
                expect(shallow(<Block block-preset={{ b: 'ek-' }} />).contains(<div className='ek-block'></div>)).toBeTruthy();
            });

            it('mods', () => {
                expect(shallow(<Block block-preset={{ b: 'ek-' }} block-modName='modValue' />)
                    .contains(<div className='ek-block ek-block_modName_modValue'></div>)).toBeTruthy();
            });
        });

        describe("css modules", () => {
            it('default', () => {
                expect(
                    shallow(
                        <Block block-preset={{ b: '', css: { block: 'h67f' } }} />
                    ).contains(
                        <div className='h67f'></div>
                    )
                ).toBeTruthy();
            });

            it('with mods', () => {
                expect(
                    shallow(
                        <Block
                            block-preset={{ b: '', css: { block: 'h67f', block_modName_modValue: 'ko45' } }}
                            block-modName='modValue'
                        />
                    ).contains(
                        <div className='h67f ko45'></div>
                    )
                ).toBeTruthy();
            });

            it('with className', () => {
                expect(
                    shallow(
                        <Block
                            block-preset={{ b: '', css: { block: 'h67f' } }}
                            className='class-name'
                        />
                    ).contains(
                        <div className='h67f class-name'></div>
                    )
                ).toBeTruthy();
            });

            it('with mods and className', () => {
                expect(
                    shallow(
                        <Block
                            block-preset={{ b: '', css: { block: 'h67f', block_modName_modValue: 'ko45' } }}
                            block-modName='modValue'
                            className='class-name VasYa'
                        />
                    ).contains(
                        <div className='h67f ko45 class-name VasYa'></div>
                    )
                ).toBeTruthy();
            });
        });
    });
});
