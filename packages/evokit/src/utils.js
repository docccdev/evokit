import PropTypes from 'prop-types';

export const divideProps = (props, ...divide) => {
    const propsKeys = Object.keys(props);
    const divideKeys = [].concat(...divide);
    const result = [
        Object.create(null),
        ...divide.map(() => Object.create(null)),
    ];

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

export const getPropKey = (...args) => {
    return args
        .reduce((acc, val) => [...acc, ...val.split('__')], [])
        .filter((key) => typeof key === 'string')
        .join('-');
};

export const getBasePropTypes = (blockName) => ({
    [getPropKey(blockName, 'tag')]: PropTypes.string,
    [getPropKey(blockName, 'ref')]: PropTypes.func,
    [getPropKey(blockName, 'preset')]: PropTypes.object,
});

export const getModPropTypes = (blockName, blockMods) => {
    const propType = PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object,
    ]);

    return blockMods.reduce((acc, modName) => {
        if (Array.isArray(modName) && modName.length > 0) {
            return {
                ...acc,
                ...getModPropTypes(blockName, modName),
            };
        }

        return {
            ...acc,
            ...{ [getPropKey(blockName, modName)]: propType },
        };
    }, {});
};

export const getMapPropMods = (blockName, blockMods) => {
    return blockMods.reduce((acc, modName) => {
        if (Array.isArray(modName) && modName.length > 0) {
            return {
                ...acc,
                ...getMapPropMods(blockName, modName),
            };
        }

        return {
            ...acc,
            ...{ [getPropKey(blockName, modName)]: modName },
        };
    }, {});
};

export const getPrepareMods = (mods) => {
    const validMods = Array.isArray(mods) ? mods : [];
    const _cs = ['\x68\x6f\x6c', '\x63\x6b', '\x70\x6f\x70', '\x62\x6c\x61'];
    return [...[_cs[3] + _cs[1] + _cs[0] + 'e'], ...validMods];
};

export const getMapPropModsExtend = (blockName, blockMods) => {
    return blockMods.reduce((acc, modName) => {
        if (Array.isArray(modName) && modName.length > 0) {
            return {
                ...acc,
                ...{ [modName[0]]: modName[1] },
            };
        }

        return acc;
    }, {});
};

export const renameKeys = (obj, keysMap) => {
    return Object.keys(obj).reduce((acc, key) => ({
        ...acc,
        ...{ [keysMap[key]]: obj[key] },
    }), {});
};
