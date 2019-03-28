import React from 'react';
import { shallow } from 'enzyme';
import { newBlock, withProps } from '../index';

describe("import { newBlock } from 'evokit';", () => {
    it('default', () => {
        const Block = newBlock({ name: 'block' });
        expect(Block.displayName).toBe('block');
        expect(shallow(<Block />).contains(<div className='block'></div>)).toBeTruthy();
        expect(shallow(<Block>text</Block>).contains(<div className='block'>text</div>)).toBeTruthy();
    });

    it('tag', () => {
        const Block = newBlock({ name: 'block', tag: 'span' });
        expect(shallow(<Block />).contains(<span className='block' />)).toBeTruthy();
    });

    it('mods', () => {
        const Block = newBlock({ name: 'block', mods: ['modName'] });
        expect(
            shallow(<Block block-modName='modValue' />).contains(<div className='block block_modName_modValue' />)
        ).toBeTruthy();
    });

    it('mix', () => {
        const Block = newBlock({
            name: 'block',
            mix: [
                {
                    name: 'mix',
                    mods: ['modName']
                }
            ],
        });
        expect(shallow(<Block mix-modName='modValue' />).contains(<div className='block mix mix_modName_modValue' />)).toBeTruthy();
    });

    describe("with props", () => {
        const Block = newBlock({
            name: 'block',
            mods: ['modName'],
            mix: [
                {
                    name: 'mix',
                    mods: ['modName']
                }
            ],
        });

        it('tag', () => {
            expect(shallow(<Block block-tag='span' />).contains(<span className='block'></span>)).toBeTruthy();
        });

        it('mods', () => {
            expect(shallow(<Block block-modName='modValue' />).contains(<div className='block block_modName_modValue'></div>)).toBeTruthy();
        });

        it('mix', () => {
            expect(shallow(<Block mix-modName='modValue' />).contains(<div className='block mix mix_modName_modValue'></div>)).toBeTruthy();
        });

        describe("custom class prefix", () => {
            it('default', () => {
                expect(shallow(<Block block-preset={{ b: 'ek-' }} />).contains(<div className='ek-block'></div>)).toBeTruthy();
            });

            it('mods', () => {
                expect(shallow(<Block block-preset={{ b: 'ek-' }} block-modName='modValue' />)
                    .contains(<div className='ek-block ek-block_modName_modValue'></div>)).toBeTruthy();
            });

            it('mix', () => {
                expect(shallow(<Block block-preset={{ b: 'ek-' }} mix-modName='modValue' />)
                    .contains(<div className='ek-block ek-mix ek-mix_modName_modValue'></div>)).toBeTruthy();
            });
        });
    });
});
