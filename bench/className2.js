const DEFAULT_PRESET = {
    b: 'ek-',
    e: '__',
    m: '_',
    v: '_',
    css: null,
};

export const withPreset = (preset) => {
    const { b, e, m, v, css } = Object.assign({}, DEFAULT_PRESET, preset);

    const getCSSModuleClassName = typeof css === 'object' && css !== null ? (cls) => css[cls] : (cls) => cls;

    const getBlockClassName = (name, elem) => {
        if (elem) {
            return b + name + e + elem;
        }
        return b + name;
    };

    const getModClassName = (blockName, modName, modValue) => {
        if (modValue) {
            return blockName + m + modName + v + modValue;
        }
        return blockName + m + modName;
    };

    return (name, elem) => {
        if (typeof name !== 'string') {
            throw new Error('The argument "name" is not a string');
        }

        const block = getBlockClassName(name, elem);

        return (mods, mix, modsExtended = {}) => {
            let result = '';

            const appendResult = (cls) => {
                const CSSModuleClassName = getCSSModuleClassName(cls);

                if (CSSModuleClassName) {
                    if (result) {
                        result += ' ';
                    }
                    result += CSSModuleClassName;
                }
            };

            appendResult(block);

            const appendFn = (modKey, modVal) => {
                if (modVal.indexOf(' ') !== -1) {
                    const splitVal = modVal.split(' ');

                    if (splitVal.length > 1 && Object.prototype.hasOwnProperty.call(modsExtended, modKey)) {
                        for (let index = 0; index < splitVal.length; index++) {
                            const extendedVal = modsExtended[modKey];
                            const extendedKey = extendedVal[index];

                            if (extendedKey) {
                                if (Array.isArray(extendedKey)) {
                                    for (let i = 0; i < extendedKey.length; i++) {
                                        const extKey = extendedKey[i];
                                        const extIndex = extendedVal.indexOf(extKey);

                                        if (i === 0 || (extIndex !== -1 && !splitVal[extIndex])) {
                                            appendResult(getModClassName(block, extKey, splitVal[index]));
                                        }
                                    }
                                } else {
                                    appendResult(getModClassName(block, extendedKey, splitVal[index]));
                                }
                            }
                        }
                    }
                } else {
                    appendResult(getModClassName(block, modKey, modVal));
                }
            };

            if (typeof mods === 'object') {
                // eslint-disable-next-line no-restricted-syntax
                for (const key in mods) {
                    if (Object.prototype.hasOwnProperty.call(mods, key)) {
                        const modVal = mods[key];

                        if (typeof modVal === 'string' || typeof modVal === 'number') {
                            appendFn(key, '' + modVal);
                        } else if (typeof modVal === 'boolean') {
                            if (modVal) {
                                appendResult(getModClassName(block, key));
                            }
                        } else if (typeof modVal === 'object') {
                            let k;
                            if (Array.isArray(modVal)) {
                                for (k = 0; k < modVal.length; k++) {
                                    if (typeof modVal[k] === 'string' || typeof modVal[k] === 'number') {
                                        appendFn(key, '' + modVal[k]);
                                    }
                                }
                            } else {
                                // eslint-disable-next-line no-restricted-syntax
                                for (k in modVal) {
                                    if (modVal[k]) {
                                        appendFn(key, '' + k);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (typeof mix === 'string') {
                if (result) {
                    result += ' ';
                }
                result += mix;
            }

            return result;
        };
    };
};

export const className = withPreset();
