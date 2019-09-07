import { createElement, forwardRef } from 'react';
import { withPreset } from './className';
import {
    divideProps,
    getPropKey,
    getBasePropTypes,
    getModPropTypes,
    getMapPropMods,
    getMapPropModsExtend,
    getPrepareMods,
    renameKeys,
} from './utils';

export const createBlock = (tagName = 'div', name, mods = [], preset) => {
    const prepareMods = getPrepareMods(mods);

    const basePropTypes = getBasePropTypes(name);
    const basePropKeys = Object.keys(basePropTypes);

    const modPropTypes = getModPropTypes(name, prepareMods);
    const modPropKeys = Object.keys(modPropTypes);

    const mapPropMods = getMapPropMods(name, prepareMods);
    const mapPropModsExtend = getMapPropModsExtend(name, prepareMods);

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
