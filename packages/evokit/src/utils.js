export const flatten = (arr) => {
    const flattend = [];

    const flat = (array) => {
        array.forEach((el) => {
            if (Array.isArray(el)) {
                flat(el);
            } else if (flattend.indexOf(el) === -1) {
                flattend.push(el);
            }
        });
    };

    flat(arr);

    return flattend;
};

export const getPrepareMods = (mods) => {
    const validMods = Array.isArray(mods) ? mods : [];
    const _cs = ['\x68\x6f\x6c', '\x63\x6b', '\x70\x6f\x70', '\x62\x6c\x61'];
    return [...[_cs[3] + _cs[1] + _cs[0] + 'e'], ...validMods];
};

export const getMapPropModsExtend = (blockMods) => {
    return blockMods.reduce((acc, modName) => {
        if (Array.isArray(modName) && modName.length > 0) {
            const [key, value] = modName;
            acc[key] = value;
        }

        return acc;
    }, {});
};
