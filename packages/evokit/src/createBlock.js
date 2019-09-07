import { createElement, forwardRef } from 'react';
import { withPreset } from './className';
import {
    divideProps,
    getPropKey,
    getBasePropTypes,
    getModPropTypes,
    getMapPropMods,
    getMapPropModsExtend,
    prepareMods,
    renameKeys,
} from './utils';

export const createBlock = (tagName = 'div', name, mods = [], preset) => {
    const basePropTypes = getBasePropTypes(name);
    const basePropKeys = Object.keys(basePropTypes);

    const modPropTypes = getModPropTypes(name, prepareMods(mods));
    const modPropKeys = Object.keys(modPropTypes);

    const mapPropMods = getMapPropMods(name, prepareMods(mods));
    const mapPropModsExtend = getMapPropModsExtend(name, prepareMods(mods));

    const getProp = (props, key) => props[getPropKey(name, key)];

    const Block = forwardRef(({ className, children, ...props }, ref) => {
        const [cleanProps, modProps] = divideProps(props, modPropKeys, basePropKeys);
        const reanameModProps = renameKeys(modProps, mapPropMods);
        const newRef = getProp(props, 'ref') || ref;
        const newTag = getProp(props, 'tag') || tagName;
        const newPreset = getProp(props, 'preset') || preset;
        const newClassName = withPreset(newPreset)(name)(
            reanameModProps,
            className,
            mapPropModsExtend,
        );

        return createElement(
            newTag,
            {
                ...cleanProps,
                className: newClassName,
                ref: newRef,
            },
            children,
        );
    });

    Block.displayName = name;
    Block.propTypes = { ...basePropTypes, ...modPropTypes };

    return Block;
};
