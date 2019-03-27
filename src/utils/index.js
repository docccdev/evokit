import React from 'react';
import { magicProps, BLOCK_PROP_KEY } from './magicProps';

const reactFn = (fn, displayName, propTypes) => {
    fn.displayName = displayName;
    fn.propTypes = propTypes;

    return fn;
};

export const withProps = (target, defautProps) => {
    if (typeof target !== 'function') {
        throw new Error('The argument "target" is not a function');
    }

    return reactFn(
        (props) => target({ ...defautProps, ...props }),
        target.displayName,
        target.propTypes,
    )
}

export const newBlock = ({ tag='div', name, mods=[], mix=[] }) => {
    if (typeof name !== 'string') {
        throw new Error('The argument "name" is not a string');
    }

    const modList = [{ name, mods }, ...mix];
    const modKeys = modList.map(({ name }) => name);

    const allowProps = modList.reduce((acc, item) => {
        if(Array.isArray(item.mods)) {
            item.mods.forEach((value) => acc[`${item.name}-${value}`] = [item.name, value]);
        }
        return acc;
    }, {
        [`${name}-tag`]: [BLOCK_PROP_KEY, 'tag'],
        [`${name}-css`]: [BLOCK_PROP_KEY, 'css'],
    });

    return reactFn(
        ({ children, ...props }) => {
            const [newProps, newTag] = magicProps(props, allowProps, modKeys);

            return React.createElement(
                newTag || tag,
                newProps,
                children,
            );
        },
        name,
    );
}
