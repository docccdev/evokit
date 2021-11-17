import { createElement, forwardRef } from 'react';
import { withPreset } from './className';
import {
    getMapPropModsExtend,
    getPrepareMods,
    flatten,
} from './utils';

import {
    checkTagName,
    checkBlockName,
    checkBlockMods,
    checkBlockPreset,
    checkPropDeprecated,
} from './checks';

export const createBlock = (tagName = 'div', blockName, blockMods, blockPreset) => {
    if (process.env.NODE_ENV !== 'production') {
        checkTagName(tagName);
        checkBlockName(blockName);
        checkBlockMods(blockMods);
        checkBlockPreset(blockPreset);
    }

    const PREFIX = blockName.replace(/__/, '-');

    const KEY_AS = PREFIX + '-as';
    const KEY_PRESET = PREFIX + '-preset';
    const KEY_REF = PREFIX + '-ref'; // DEPRECATED
    const KEY_TAG = PREFIX + '-tag'; // DEPRECATED

    // add 'blackhole' to allowed mods
    const BLOCK_MODS = getPrepareMods(blockMods);

    const BASE_BLOCK_PROPS = ['as', 'preset', 'ref', 'tag'];
    const MODS_BLOCK_PROPS = flatten(BLOCK_MODS);
    const MODS_BLOCK_PROPS_EXTENDED = getMapPropModsExtend(BLOCK_MODS);

    const BASE_BLOCK_PROPS_WITH_PREFIX = BASE_BLOCK_PROPS.map((val) => PREFIX + '-' + val);
    const MODS_BLOCK_PROPS_WITH_PREFIX = MODS_BLOCK_PROPS.map((val) => PREFIX + '-' + val);

    const Block = forwardRef((props, ref) => {
        if (process.env.NODE_ENV !== 'production') {
            checkPropDeprecated(!!props[KEY_REF], KEY_REF, 'ref');
            checkPropDeprecated(!!props[KEY_TAG], KEY_TAG, KEY_AS);
        }

        const elementType = props[KEY_AS] || props[KEY_TAG] || tagName;
        const elementProps = {};
        const modsProps = {};

        // eslint-disable-next-line no-restricted-syntax
        for (const key in props) {
            // eslint-disable-next-line no-continue
            if (BASE_BLOCK_PROPS_WITH_PREFIX.indexOf(key) !== -1) continue;

            const index = MODS_BLOCK_PROPS_WITH_PREFIX.indexOf(key);

            if (index !== -1) {
                modsProps[MODS_BLOCK_PROPS[index]] = props[key];
            } else {
                elementProps[key] = props[key];
            }
        }

        elementProps.ref = ref || props[KEY_REF];
        elementProps.className = withPreset(props[KEY_PRESET] || blockPreset)(blockName)(
            modsProps,
            props.className,
            MODS_BLOCK_PROPS_EXTENDED,
        );

        return createElement(elementType, elementProps);
    });

    Block.displayName = blockName;

    return Block;
};
