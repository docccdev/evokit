import { createElement } from 'react';
import { withPreset } from './className';
import {
    divideProps,
    getPropKey,
    getBasePropTypes,
    getModPropTypes,
    getMapPropMods,
    prepareMods,
    renameKeys,
} from './utils';

export const createBlock = (tagName = 'div', name, mods = [], preset) => {
    const basePropTypes = getBasePropTypes(name);
    const modPropTypes = getModPropTypes(name, prepareMods(mods));
    const mapPropMods = getMapPropMods(name, prepareMods(mods));
    const basePropKeys = Object.keys(basePropTypes);
    const modPropKeys = Object.keys(modPropTypes);

    const getProp = (props, key) => props[getPropKey(name, key)];

    const Block = ({ ref, className, children, ...props }) => {
        const [cleanProps, modProps] = divideProps(props, modPropKeys, basePropKeys);
        const modKeys = renameKeys(modProps, mapPropMods);
        const newRef = getProp(props, 'ref') || ref;
        const newTag = getProp(props, 'tag') || tagName;
        const newPreset = getProp(props, 'preset') || preset;
        const newClassName = withPreset(newPreset)(name)(modKeys, className);

        return createElement(newTag, {
            ...cleanProps,
            className: newClassName,
            ref: newRef,
        }, children);
    };

    Block.displayName = name;
    Block.propTypes = { ...basePropTypes, ...modPropTypes };

    return Block;
};
