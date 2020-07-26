import { getPropKey, divideProps } from '../src/utils';

describe('utils', () => {
    it('getPropKey()', () => {
        expect(getPropKey('block', 'mod')).toBe('block-mod');
        expect(getPropKey('block__elem', 'mod')).toBe('block-elem-mod');
    });

    it('divideProps()', () => {
        const props = {
            children: 'children',
            ref: 'ref',
            key: 'key',
        };

        const baseProps = {
            'block-as': 'as',
            'block-preset': 'preset',
        };

        const modProps = {
            'block-mod1': 'mod1',
            'block-mod2': 'mod2',
            'block-mod2': 'mod2',
        };

        const [cleanProps, restProps] = divideProps(
            Object.assign({}, props, baseProps, modProps),
            Object.keys(baseProps),
            Object.keys(modProps)
        );

        expect(Object.keys(cleanProps).length).toBe(3);
        expect(cleanProps).toHaveProperty('children', 'children');
        expect(cleanProps).toHaveProperty('ref', 'ref');
        expect(cleanProps).toHaveProperty('key', 'key');

        console.error(restProps);

        expect(Object.keys(restProps).length).toBe(5);
        // expect(restProps).toHaveProperty('children', 'children');
    });

    divideProps
});
