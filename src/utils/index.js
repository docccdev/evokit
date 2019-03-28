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

export const newBlock = ({ name, tag='div', preset=null, mods=[], mix=[] }) => {
    if (typeof name !== 'string') {
        throw new Error('The argument "name" is not a string');
    }

    const modList = [{ name, mods }, ...mix];
    const modKeys = modList.map(({ name }) => name);

    const defaultProps = {
        [`${name}-tag`]: tag,
        [`${name}-preset`]: preset,
    };

    const allowProps = modList.reduce((acc, item) => {
        if(Array.isArray(item.mods)) {
            item.mods.forEach((value) => acc[`${item.name}-${value}`] = [item.name, value]);
        }
        return acc;
    }, {});

    Object.assign(allowProps, {
        [`${name}-tag`]: [BLOCK_PROP_KEY, 'tag'],
        [`${name}-preset`]: [BLOCK_PROP_KEY, 'preset'],
        [`${name}-ref`]: [BLOCK_PROP_KEY, 'ref'],
    });

    return reactFn(
        ({ children, ...props }) => {
            const [newProps, newTag] = magicProps(props, allowProps, defaultProps, modKeys);

            return React.createElement(
                newTag,
                newProps,
                children,
            );
        },
        name,
    );
}
