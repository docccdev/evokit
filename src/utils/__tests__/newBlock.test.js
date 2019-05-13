import React from 'react';
import { shallow } from 'enzyme';
import { newBlock, withProps } from '../index';

describe("import { newBlock } from 'evokit';", () => {
    it('default', () => {
        const Block = newBlock('div', 'block');
        expect(Block.displayName).toBe('block');
        expect(shallow(<Block />).contains(<div className='ek-block'></div>)).toBeTruthy();
        expect(shallow(<Block>text</Block>).contains(<div className='ek-block'>text</div>)).toBeTruthy();
    });

    it('elem', () => {
        const Element = newBlock('li', 'list__item');
        expect(shallow(<Element />).contains(<li className='ek-list__item'></li>)).toBeTruthy();
    });

    it('tag', () => {
        const Block = newBlock('span', 'block');
        expect(shallow(<Block />).contains(<span className='ek-block' />)).toBeTruthy();
    });

    it('mods', () => {
        const Block = newBlock('div', 'block', ['modName']);
        expect(
            shallow(<Block block-modName='modValue' />).contains(<div className='ek-block ek-block_modName_modValue' />)
        ).toBeTruthy();
    });

    describe("with props", () => {
        const Block = newBlock('div', 'block', ['modName']);
        const BlockItem = newBlock('div', 'block__item', ['elModName']);

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

        describe("custom class prefix", () => {
            it('default', () => {
                expect(shallow(<Block block-preset={{ b: 'ek-' }} />).contains(<div className='ek-block'></div>)).toBeTruthy();
            });

            it('mods', () => {
                expect(shallow(<Block block-preset={{ b: 'ek-' }} block-modName='modValue' />)
                    .contains(<div className='ek-block ek-block_modName_modValue'></div>)).toBeTruthy();
            });
        });
    });
});
