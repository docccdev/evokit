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

import {
    checkTagName,
    checkBlockName,
    checkBlockMods,
    checkBlockPreset,
    checkPropDeprecated,
} from './checks';

export const createBlock = (tagName = 'div', blockName, blockMods, blockPreset) => {
    checkTagName(tagName);
    checkBlockName(blockName);
    checkBlockMods(blockMods);
    checkBlockPreset(blockPreset);

    const prepareMods = getPrepareMods(blockMods);

    const basePropTypes = getBasePropTypes(blockName);
    const basePropKeys = Object.keys(basePropTypes);

    const modPropTypes = getModPropTypes(blockName, prepareMods);
    const modPropKeys = Object.keys(modPropTypes);

    const mapPropMods = getMapPropMods(blockName, prepareMods);
    const mapPropModsExtend = getMapPropModsExtend(blockName, prepareMods);

    const getProp = (props, key) => props[getPropKey(blockName, key)];

    const Block = forwardRef(({ className, children, ...props }, ref) => {
        checkPropDeprecated(!!getProp(props, 'ref'), getPropKey(blockName, 'ref'), 'ref');

        const [cleanProps, modProps] = divideProps(props, modPropKeys, basePropKeys);
        const reanameModProps = renameKeys(modProps, mapPropMods);
        const newRef = ref || getProp(props, 'ref');
        const newTag = getProp(props, 'tag') || tagName;
        const newPreset = getProp(props, 'preset') || blockPreset;
        const newClassName = withPreset(newPreset)(blockName)(
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

    Block.displayName = blockName;
    Block.propTypes = { ...basePropTypes, ...modPropTypes };

    return Block;
};
