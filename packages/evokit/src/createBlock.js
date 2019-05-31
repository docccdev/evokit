import React from 'react';
import PropTypes from 'prop-types';
import { withPreset } from './className';

const divideProps = (props, ...divide) => {
    const propsKeys = Object.keys(props);
    const divideKeys = [].concat(...divide);
    const result = [Object.create(null), ...divide.map(() => Object.create(null))];

    propsKeys.forEach((key) => {
        const value = props[key];

        if (divideKeys.includes(key)) {
            divide.forEach((keys, index) => {
                if (keys.includes(key)) {
                    result[index + 1][key] = value;
                }
            });
        } else {
            result[0][key] = value;
        }
    });

    return result;
};

const getPropKey = (...args) => {
    return args
        .reduce((acc, val) => [...acc, ...val.split('__')], [])
        .filter((key) => typeof key === 'string')
        .join('-');
};

const getBasePropTypes = (blockName) => ({
    [getPropKey(blockName, 'tag')]: PropTypes.string,
    [getPropKey(blockName, 'ref')]: PropTypes.func,
    [getPropKey(blockName, 'preset')]: PropTypes.object,
});

const getModPropTypes = (blockName, blockMods) => {
    return blockMods.reduce((acc, modName) => ({
        ...acc,
        ...{
            [getPropKey(blockName, modName)]: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.array,
                PropTypes.object,
            ]),
        },
    }), {});
};

const getMapPropMods = (blockName, blockMods) => {
    return blockMods.reduce((acc, modName) => ({
        ...acc,
        ...{ [getPropKey(blockName, modName)]: modName },
    }), {});
};

const renameKeys = (obj, keysMap) => {
    return Object.keys(obj).reduce((acc, key) => ({
        ...acc,
        ...{ [keysMap[key] || key]: obj[key] },
    }), {});
};

export const withProps = (target, defaultProps) => {
    if (typeof target !== 'function') {
        throw new Error('The first argument `target` is not a function');
    }

    const Block = (props) => target(props);

    Block.defaultProps = {
        ...target.defaultProps,
        ...defaultProps,
    };
    Block.displayName = target.displayName;
    Block.propTypes = target.propTypes;

    return Block;
};

export const createBlock = (tagName = 'div', name, mods = [], preset) => {
    if (typeof name !== 'string') {
        throw new Error('The second argument `name` is not a string');
    }
    const basePropTypes = getBasePropTypes(name);
    const modPropTypes = getModPropTypes(name, mods);
    const mapPropMods = getMapPropMods(name, mods);
    const basePropKeys = Object.keys(basePropTypes);
    const modPropKeys = Object.keys(modPropTypes);

    const getProp = (props, key) => props[getPropKey(name, key)];

    const Block = (props) => {
        const { ref, className } = props;
        const [
            cleanProps, modProps, baseProps,
        ] = divideProps(props, modPropKeys, basePropKeys);
        const blockCn = withPreset(getProp(baseProps, 'preset'))(name);

        return React.createElement(
            getProp(baseProps, 'tag'),
            {
                ...cleanProps,
                className: blockCn(renameKeys(modProps, mapPropMods), className),
                ref: getProp(baseProps, 'ref') || ref,
            },
        );
    };

    Block.displayName = name;
    Block.propTypes = { ...basePropTypes, ...modPropTypes };

    return withProps(Block, {
        [getPropKey(name, 'tag')]: tagName,
        [getPropKey(name, 'preset')]: preset,
    });
};
