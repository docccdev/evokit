import React from 'react';
import { className, withPreset } from '../src/className';

describe("import { className, withPreset } from 'evokit';", () => {
    it('common', () => {
        const cn = className('Block');

        expect(typeof className).toBe('function');
        expect(typeof cn).toBe('function');
    });

    it('block', () => {
        const cn = className('Block');
        expect(cn()).toBe('ek-Block');
    });

    it('elem', () => {
        const cn = className('Block', 'Elem');
        expect(cn()).toBe('ek-Block__Elem');
    });

    describe("modifiers", () => {
        it('block', () => {
            const cn = className('Block');
            expect(cn({ modName: true })).toBe('ek-Block ek-Block_modName');
        });

        it('elem', () => {
            const cn = className('Block', 'Elem');
            expect(cn({ modName: true })).toBe('ek-Block__Elem ek-Block__Elem_modName');
        });

        it('more than one', () => {
            const mods = { modName: true, modName2: 'modVal' };
            const cn1 = className('Block');
            const cn2 = className('Block', 'Elem');

            expect(cn1(mods)).toBe('ek-Block ek-Block_modName ek-Block_modName2_modVal');
            expect(cn2(mods)).toBe('ek-Block__Elem ek-Block__Elem_modName ek-Block__Elem_modName2_modVal');
        });

        it('different values', () => {
            const cn = className('Block');
            expect(cn({ modName: { val1: true, val2: false, val3: 0 } }))
                .toBe('ek-Block ek-Block_modName_val1');
            expect(cn({ modName: ['val1', 'val2'] }))
                .toBe('ek-Block ek-Block_modName_val1 ek-Block_modName_val2');
        });

        it('empty', () => {
            const cn = className('Block');
            expect(cn({})).toBe('ek-Block');
        });

        it('falsy', () => {
            const cn = className('Block');
            expect(cn({ modName: false })).toBe('ek-Block');
        });

        it('with falsy', () => {
            const cn = className('Block');
            expect(cn({ modName: false, mod: 'val' })).toBe('ek-Block ek-Block_mod_val');
        });

        it('zero or number', () => {
            const cn = className('Block');
            expect(cn({ modName: 0 })).toBe('ek-Block ek-Block_modName_0');
            expect(cn({ modName: 18 })).toBe('ek-Block ek-Block_modName_18');
        });

        it('undefined', () => {
            const cn = className('Block');
            expect(cn({ modName: undefined })).toBe('ek-Block');
            expect(cn(undefined)).toBe('ek-Block');
        });
    });

    describe("mix", () => {
        it('block', () => {
            const cn = className('Block');
            expect(cn(null, ['mix1', 'mix2'])).toBe('ek-Block mix1 mix2');
        });

        it('block with mods', () => {
            const cn = className('Block');
            expect(cn({ theme: 'normal' }, ['mix'])).toBe('ek-Block ek-Block_theme_normal mix');
        });

        it('elem', () => {
            const cn = className('Block', 'Elem');
            expect(cn(null, ['mix1', 'mix2'])).toBe('ek-Block__Elem mix1 mix2');
        });

        it('elem with mods', () => {
            const cn = className('Block', 'Elem');
            expect(cn({ theme: 'normal' }, ['mix'])).toBe('ek-Block__Elem ek-Block__Elem_theme_normal mix');
        });

        it('undefined', () => {
            const cn = className('Block');
            expect(cn(null, undefined)).toBe('ek-Block');
        });

        it('unique block', () => {
            const cn = className('Block');
            expect(cn(null, ['ek-Block'])).toBe('ek-Block');
        });

        it('unique block with mods', () => {
            const cn = className('Block');
            expect(cn({ theme: 'normal' }, ['ek-Block ek-Block_size_m'])).toBe('ek-Block ek-Block_theme_normal ek-Block_size_m');
        });

        it('unique elem', () => {
            const cn = className('Block', 'Elem');
            expect(cn(null, ['ek-Block__Elem'])).toBe('ek-Block__Elem');
        });

        it('unique elem with mods', () => {
            const cn = className('Block', 'Elem');
            expect(cn({ theme: 'normal' }, ['ek-Block__Elem ek-Block__Elem_size_m']))
                .toBe('ek-Block__Elem ek-Block__Elem_theme_normal ek-Block__Elem_size_m');
        });
    });

    describe('with preset { b }', () => {
        const cnBlockPrefix = withPreset({
            b: 'Prefix-',
        });

        it('block', () => {
            const cn = cnBlockPrefix('Block');
            expect(cn()).toBe('Prefix-Block');
        });

        it('elem', () => {
            const cn = cnBlockPrefix('Block', 'Elem');
            expect(cn()).toBe('Prefix-Block__Elem');
        });

        describe("modifiers", () => {
            it('block', () => {
                const cn = cnBlockPrefix('Block');
                expect(cn({ modName: true })).toBe('Prefix-Block Prefix-Block_modName');
            });

            it('elem', () => {
                const cn = cnBlockPrefix('Block', 'Elem');
                expect(cn({ modName: true })).toBe('Prefix-Block__Elem Prefix-Block__Elem_modName');
            });

            it('more than one', () => {
                const mods = { modName: true, modName2: 'modVal' };
                const cn1 = cnBlockPrefix('Block');
                const cn2 = cnBlockPrefix('Block', 'Elem');

                expect(cn1(mods)).toBe('Prefix-Block Prefix-Block_modName Prefix-Block_modName2_modVal');
                expect(cn2(mods)).toBe('Prefix-Block__Elem Prefix-Block__Elem_modName Prefix-Block__Elem_modName2_modVal');
            });

            it('different values', () => {
                const cn = cnBlockPrefix('Block');
                expect(cn({ modName: { val1: true, val2: false, val3: 0 } }))
                    .toBe('Prefix-Block Prefix-Block_modName_val1');
                expect(cn({ modName: ['val1', 'val2'] }))
                    .toBe('Prefix-Block Prefix-Block_modName_val1 Prefix-Block_modName_val2');
            });

            it('empty', () => {
                const cn = cnBlockPrefix('Block');
                expect(cn({})).toBe('Prefix-Block');
            });

            it('falsy', () => {
                const cn = cnBlockPrefix('Block');
                expect(cn({ modName: false })).toBe('Prefix-Block');
            });

            it('with falsy', () => {
                const cn = cnBlockPrefix('Block');
                expect(cn({ modName: false, mod: 'val' })).toBe('Prefix-Block Prefix-Block_mod_val');
            });

            it('zero or number', () => {
                const cn = cnBlockPrefix('Block');
                expect(cn({ modName: 0 })).toBe('Prefix-Block Prefix-Block_modName_0');
                expect(cn({ modName: 18 })).toBe('Prefix-Block Prefix-Block_modName_18');
            });

            it('undefined', () => {
                const cn = cnBlockPrefix('Block');
                expect(cn({ modName: undefined })).toBe('Prefix-Block');
                expect(cn(undefined)).toBe('Prefix-Block');
            });
        });
    });

    describe("with preset { b, e, m, v }", () => {
        const cnBlockAllCustom = withPreset({
            b: '_',
            e: '-',
            m: '^',
            v: '@',
        });

        it('block', () => {
            const cn = cnBlockAllCustom('Block');
            expect(cn({ mod: true })).toBe('_Block _Block^mod');
            expect(cn({ mod: false })).toBe('_Block');
            expect(cn({ mod: 'value' })).toBe('_Block _Block^mod@value');
        });

        it('elem', () => {
            const cn = cnBlockAllCustom('Block', 'Elem');
            expect(cn({ mod: true })).toBe('_Block-Elem _Block-Elem^mod');
            expect(cn({ mod: false })).toBe('_Block-Elem');
            expect(cn({ mod: 'value' })).toBe('_Block-Elem _Block-Elem^mod@value');
        });
    });

    describe("with preset { css }", () => {
        const cnBlockCssModules = withPreset({
            b: '',
            css: {
                'Block': 'cssBlock',
                'Elem': 'cssElem',
                'Block_mod': 'cssBlock_cssMod',
                'Block_mod_value': 'cssBlock_cssMod_cssValue',
                'Block__Elem': 'cssBlock__cssElem',
                'Block__Elem_mod': 'cssBlock__cssElem_cssMod',
                'Block__Elem_mod_value': 'cssBlock__cssElem_cssMod_cssValue',
            },
        });

        it('block', () => {
            const cn = cnBlockCssModules('Block');
            expect(cn()).toBe('cssBlock');
            expect(cn({ fakeMod: true })).toBe('cssBlock');
            expect(cn({ mod: true })).toBe('cssBlock cssBlock_cssMod');
            expect(cn({ mod: false })).toBe('cssBlock');
            expect(cn({ mod: 'value' })).toBe('cssBlock cssBlock_cssMod_cssValue');
        });

        it('elem', () => {
            const cn = cnBlockCssModules('Block', 'Elem');
            expect(cn()).toBe('cssBlock__cssElem');
            expect(cn({ fakeMod: true })).toBe('cssBlock__cssElem');
            expect(cn({ mod: true })).toBe('cssBlock__cssElem cssBlock__cssElem_cssMod');
            expect(cn({ mod: false })).toBe('cssBlock__cssElem');
            expect(cn({ mod: 'value' })).toBe('cssBlock__cssElem cssBlock__cssElem_cssMod_cssValue');
        });
    });
});
